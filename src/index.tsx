import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { generateEmailHTML, generateEmailHTMLWithCID, type ChecklistData } from './email-utils'

type Bindings = {
  RESEND_API_KEY: string
  FROM_EMAIL: string
  FROM_NAME: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Main checklist page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>케이밴 제품 시공 점검표</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
        <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
        <style>
            body {
                font-family: 'Malgun Gothic', '맑은 고딕', Arial, sans-serif;
                -webkit-tap-highlight-color: transparent;
            }
            
            /* Touch-friendly checkbox */
            .touch-checkbox {
                width: 50px;
                height: 50px;
                border: 3px solid #2c5aa0;
                border-radius: 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
                background: white;
            }
            
            .touch-checkbox.checked {
                background: #2c5aa0;
                color: white;
            }
            
            .touch-checkbox:active {
                transform: scale(0.95);
            }
            
            /* Signature canvas */
            .signature-canvas {
                border: 2px solid #2c5aa0;
                border-radius: 8px;
                touch-action: none;
                background: white;
                cursor: crosshair;
            }
            
            /* Loading spinner */
            .spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid #2c5aa0;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Section animations */
            .section-card {
                animation: fadeIn 0.3s ease-in;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            /* Input focus styles */
            input:focus, textarea:focus {
                outline: none;
                border-color: #2c5aa0;
                box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
            }
            
            /* Photo button styles */
            .photo-button {
                width: 50px;
                height: 50px;
                border: 3px solid #10b981;
                border-radius: 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s;
                background: white;
                color: #10b981;
            }
            
            .photo-button.has-photo {
                background: #10b981;
                color: white;
            }
            
            .photo-button:active {
                transform: scale(0.95);
            }
            
            /* Photo preview */
            .photo-preview {
                max-width: 100%;
                max-height: 200px;
                border-radius: 8px;
                margin-top: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            
            /* Image modal */
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                padding: 20px;
            }
            
            .image-modal img {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <div id="app" class="max-w-4xl mx-auto p-4 md:p-6 pb-24">
            <!-- Header -->
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h1 class="text-3xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-clipboard-check mr-3"></i>
                    케이밴 제품 시공 점검표
                </h1>
                <div class="text-sm text-gray-600">
                    <p><strong>발행일:</strong> <span id="today"></span></p>
                    <p class="mt-1"><strong>목적:</strong> 시공 품질 확보 및 고객 만족도 향상</p>
                </div>
            </div>

            <!-- Installation Info Form -->
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6 section-card">
                <h2 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-info-circle mr-2"></i>
                    시공 정보
                </h2>
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">시공일자</label>
                        <input type="date" id="installDate" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                           >
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">차량 차대번호</label>
                        <input type="text" id="vehicleVin" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="차대번호를 입력하세요">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">주행거리 (km)</label>
                        <input type="number" id="mileage" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="주행거리를 입력하세요 (예: 50000)" 
                            min="0" 
                            step="1" 
                           >
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-3">제품 시공명 (해당 항목 체크)</label>
                        
                        <!-- 좌우 2단 레이아웃 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <!-- 기아PV5 -->
                            <div class="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
                                <h3 class="text-lg font-bold text-blue-900 mb-3 flex items-center">
                                    <i class="fas fa-car mr-2"></i>
                                    기아PV5
                                </h3>
                                <div class="space-y-2">
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 스마트패키지">
                                        <span class="text-base">스마트패키지</span>
                                    </label>
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 워크스테이션">
                                        <span class="text-base">워크스테이션</span>
                                    </label>
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 3단부품선반">
                                        <span class="text-base">3단부품선반</span>
                                    </label>
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-blue-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-blue-600 mr-3" value="기아PV5 3단선반">
                                        <span class="text-base">3단선반</span>
                                    </label>
                                </div>
                            </div>
                            
                            <!-- 밀워키PV5 -->
                            <div class="border-2 border-red-200 rounded-lg p-4 bg-red-50">
                                <h3 class="text-lg font-bold text-red-900 mb-3 flex items-center">
                                    <i class="fas fa-tools mr-2"></i>
                                    밀워키PV5
                                </h3>
                                <div class="space-y-2">
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 스마트에디션">
                                        <span class="text-base">스마트에디션</span>
                                    </label>
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 워크스테이션">
                                        <span class="text-base">워크스테이션</span>
                                    </label>
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 3단부품선반">
                                        <span class="text-base">3단부품선반</span>
                                    </label>
                                    <label class="flex items-center p-2 bg-white border border-gray-300 rounded cursor-pointer hover:bg-red-50 transition">
                                        <input type="checkbox" class="product-checkbox w-5 h-5 text-red-600 mr-3" value="밀워키PV5 3단선반">
                                        <span class="text-base">3단선반</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 기타 입력란 -->
                        <div class="mt-4">
                            <label class="flex items-center mb-2">
                                <input type="checkbox" id="otherProductCheckbox" class="w-5 h-5 text-blue-600 mr-3">
                                <span class="text-base font-medium text-gray-700">기타 (직접 입력)</span>
                            </label>
                            <input type="text" id="otherProductInput" 
                                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                                placeholder="기타 제품명을 입력하세요"
                                disabled>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Checklist Sections -->
            <div id="checklist-container"></div>

            <!-- Warranty Certificate Section -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-xl p-8 mb-6 section-card border-4 border-blue-400">
                <h2 class="text-3xl font-bold text-blue-900 mb-6 flex items-center justify-center">
                    <i class="fas fa-certificate mr-3"></i>
                    품질보증서
                </h2>
                
                <div class="bg-white rounded-lg p-6 shadow-inner">
                    <div class="space-y-5 text-gray-800">
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-lg mr-4 flex-shrink-0">1</span>
                            <p class="text-xl leading-relaxed pt-1">
                                케이밴 제품의 보상 기준은 <strong class="text-blue-700">공정거래위원회 소비자 분쟁 해결 기준</strong>에 따릅니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-lg mr-4 flex-shrink-0">2</span>
                            <p class="text-xl leading-relaxed pt-1">
                                본 제품은 <strong class="text-blue-700">엄격한 품질관리 및 검사 과정</strong>을 거쳐서 만들어진 제품입니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-lg mr-4 flex-shrink-0">3</span>
                            <p class="text-xl leading-relaxed pt-1">
                                보증 기간 중 고객이 정상적으로 사용하는 과정에서 제품상의 결함으로 인해 발생한 고장의 경우, <strong class="text-blue-700">무상 수리</strong>를 제공합니다.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold text-lg mr-4 flex-shrink-0">4</span>
                            <p class="text-xl leading-relaxed pt-1">
                                서비스를 받으실 때 <strong class="text-blue-700">본 보증서를 제시</strong>하여 주십시오.
                            </p>
                        </div>
                        
                        <div class="flex items-start">
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold text-lg mr-4 flex-shrink-0">5</span>
                            <p class="text-xl leading-relaxed pt-1">
                                본 제품의 보증 기간은 <strong class="text-green-700">3년 6만 킬로미터</strong>로 규정합니다.
                            </p>
                        </div>
                        
                        <div class="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
                            <p class="text-lg font-bold text-red-800 mb-3">
                                <i class="fas fa-exclamation-triangle mr-2"></i>
                                다음의 경우는 품질 보증 조건에 해당되지 않으므로 유상 수리로 적용됩니다.
                            </p>
                            <div class="space-y-2 text-base text-gray-700 ml-4">
                                <p><strong>가.</strong> 소비자의 고의 또는 과실로 인하여 발생된 피해의 경우.</p>
                                <p><strong>나.</strong> 당사의 서비스 기사가 아닌 자가 제품의 구조, 기능을 개조 또는 이동, 변조하여 발생된 고장.</p>
                                <p><strong>다.</strong> 제품 사용 중 발생되는 생활 스크래치 및 변형, 변색.</p>
                                <p><strong>라.</strong> 제품의 사용 방법 숙지 부족으로 인한 제품의 파손, 재설치와 관련된 사항.</p>
                                <p><strong>마.</strong> 차량 운행 중 발생할 수 있는 각종 사고로 인해 제품의 고장 또는 결함이 발생한 경우.</p>
                                <p><strong>바.</strong> 천재지변에 의한 제품의 고장 또는 결함의 경우.</p>
                                <p><strong>사.</strong> 무상 보증기간이 도래된 경우.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t-2 border-gray-200">
                        <div class="flex justify-between items-center text-lg">
                            <div class="text-gray-600">
                                <i class="fas fa-phone-alt mr-2 text-blue-600"></i>
                                문의: <strong class="text-gray-800">031-666-1901</strong> / <strong class="text-gray-800">010-3271-1900</strong>
                            </div>
                            <div class="text-gray-600">
                                <i class="fas fa-building mr-2 text-blue-600"></i>
                                <strong class="text-blue-900">(주)케이밴</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Signature Section -->
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6 section-card">
                <h2 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <i class="fas fa-signature mr-2"></i>
                    서명란
                </h2>
                
                <!-- Installer Signature -->
                <div class="mb-6">
                    <h3 class="font-bold text-lg mb-2">시공자</h3>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">성명</label>
                        <input type="text" id="installerName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="시공자 이름">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">서명</label>
                        <canvas id="installerSignature" 
                            class="signature-canvas w-full" 
                            width="600" height="200"></canvas>
                        <button onclick="clearSignature('installer')" 
                            class="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                            <i class="fas fa-eraser mr-1"></i> 지우기
                        </button>
                    </div>
                </div>

                <!-- Customer Signature -->
                <div>
                    <h3 class="font-bold text-lg mb-2">고객</h3>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">성명</label>
                        <input type="text" id="customerName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="고객 이름">
                    </div>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일 주소 1 (필수)</label>
                        <input type="email" id="customerEmail1" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com">
                    </div>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일 주소 2 (선택)</label>
                        <input type="email" id="customerEmail2" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com">
                    </div>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일 주소 3 (선택)</label>
                        <input type="email" id="customerEmail3" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">서명</label>
                        <canvas id="customerSignature" 
                            class="signature-canvas w-full" 
                            width="600" height="200"></canvas>
                        <button onclick="clearSignature('customer')" 
                            class="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                            <i class="fas fa-eraser mr-1"></i> 지우기
                        </button>
                    </div>
                </div>
            </div>

            <!-- Notice -->
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p class="text-sm text-yellow-800">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>안내:</strong> 모든 항목을 확인하고 서명 후 원하는 버튼을 눌러주세요.
                </p>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Email Submit Button -->
                <button id="emailBtn" onclick="submitEmail()" 
                    class="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
                    <i class="fas fa-envelope mr-2"></i>
                    📧 이메일 발송
                </button>
                
                <!-- JPG Download Button -->
                <button id="jpgBtn" onclick="downloadJPG()" 
                    class="w-full bg-green-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition shadow-lg flex items-center justify-center">
                    <i class="fas fa-image mr-2"></i>
                    📸 JPG 이미지 다운로드
                </button>
            </div>

            <!-- Loading Overlay -->
            <div id="loadingOverlay" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-lg p-8 text-center">
                    <div class="spinner mx-auto mb-4"></div>
                    <p class="text-lg font-medium">처리 중입니다...</p>
                    <p class="text-sm text-gray-600 mt-2">잠시만 기다려주세요</p>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            // Checklist data
            const checklistSections = [
                {
                    title: '차바닥 (태고합판, 알루미늄체크판, 부자재)',
                    items: ['외관, 표면', '고정볼트', '테두리고정 및 마감', '소음']
                },
                {
                    title: '격벽타공판',
                    items: ['외관, 표면, 도장, 로고', '고정볼트', '테두리고정 및 마감']
                },
                {
                    title: '격벽 2단 선반',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음']
                },
                {
                    title: '3단 선반 (휠 좌측) 또는 (휠 우측)',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고 확인', '선반높이, 수평 확인', '프레임 상·하단 볼트 고정 확인', '소음 확인']
                },
                {
                    title: '부품 3단 선반 (휠 좌측) 또는 (휠 우측)',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고 확인', '선반높이, 수평 확인', '프레임 상·하단 볼트 고정 확인', '소음 확인']
                },
                {
                    title: '워크스페이스 (휠 우측)',
                    items: ['프레임 및 트레이 외관, 표면, 도장, 로고 확인', '선반높이, 수평 확인', '프레임 상·하단 볼트 고정 확인', '소음 확인']
                }
            ];

            // Set today's date
            document.getElementById('today').textContent = new Date().toLocaleDateString('ko-KR');
            document.getElementById('installDate').valueAsDate = new Date();

            // Handle "기타" checkbox and input
            const otherCheckbox = document.getElementById('otherProductCheckbox');
            const otherInput = document.getElementById('otherProductInput');
            
            otherCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    otherInput.disabled = false;
                    otherInput.focus();
                } else {
                    otherInput.disabled = true;
                    otherInput.value = '';
                }
            });

            // Store photos (전역으로 변경)
            window.photos = {};

            // Render checklist sections
            const container = document.getElementById('checklist-container');
            checklistSections.forEach((section, sectionIndex) => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'bg-white rounded-lg shadow-lg p-6 mb-6 section-card';
                sectionDiv.innerHTML = \`
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-bold text-blue-900">\${section.title}</h2>
                        <div>
                            <input type="file" 
                                id="section-photo-\${sectionIndex}" 
                                accept="image/*" 
                                multiple
                                class="hidden"
                                onchange="handleSectionPhotoUpload(this, \${sectionIndex})">
                            <label for="section-photo-\${sectionIndex}" 
                                class="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition">
                                <i class="fas fa-camera"></i>
                                <span class="text-sm font-medium">사진</span>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Photo previews for this section -->
                    <div id="section-photos-\${sectionIndex}" class="mb-4 flex flex-wrap gap-2"></div>
                    
                    <div class="space-y-3">
                        \${section.items.map((item, itemIndex) => \`
                            <div class="p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="flex-1 text-base">\${item}</span>
                                    <div class="touch-checkbox" 
                                        data-section="\${sectionIndex}" 
                                        data-item="\${itemIndex}"
                                        onclick="toggleCheck(this)">
                                        <i class="fas fa-check text-2xl hidden"></i>
                                    </div>
                                </div>
                            </div>
                        \`).join('')}
                    </div>
                \`;
                container.appendChild(sectionDiv);
            });

            // Toggle checkbox
            window.toggleCheck = function(element) {
                element.classList.toggle('checked');
                const icon = element.querySelector('i');
                icon.classList.toggle('hidden');
            };

            // Signature functionality
            const canvases = {
                installer: document.getElementById('installerSignature'),
                customer: document.getElementById('customerSignature')
            };

            const contexts = {
                installer: canvases.installer.getContext('2d'),
                customer: canvases.customer.getContext('2d')
            };

            let isDrawing = {
                installer: false,
                customer: false
            };

            // Check if signature is empty
            const isSignatureEmpty = (canvas) => {
                const ctx = canvas.getContext('2d');
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                
                // Check if there are any non-white pixels (drawing exists)
                for (let i = 0; i < imageData.length; i += 4) {
                    const r = imageData[i];
                    const g = imageData[i + 1];
                    const b = imageData[i + 2];
                    const a = imageData[i + 3];
                    
                    // If pixel is not white and not transparent, signature exists
                    if ((r < 250 || g < 250 || b < 250) && a > 0) {
                        return false; // Signature exists!
                    }
                }
                return true; // Empty signature
            };

            // Setup signature pads
            Object.keys(canvases).forEach(type => {
                const canvas = canvases[type];
                const ctx = contexts[type];
                
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';

                const startDrawing = (e) => {
                    isDrawing[type] = true;
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = canvas.width / rect.width;
                    const scaleY = canvas.height / rect.height;
                    const x = ((e.clientX || e.touches[0].clientX) - rect.left) * scaleX;
                    const y = ((e.clientY || e.touches[0].clientY) - rect.top) * scaleY;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                };

                const draw = (e) => {
                    if (!isDrawing[type]) return;
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    const scaleX = canvas.width / rect.width;
                    const scaleY = canvas.height / rect.height;
                    const x = ((e.clientX || e.touches[0].clientX) - rect.left) * scaleX;
                    const y = ((e.clientY || e.touches[0].clientY) - rect.top) * scaleY;
                    ctx.lineTo(x, y);
                    ctx.stroke();
                };

                const stopDrawing = () => {
                    isDrawing[type] = false;
                };

                canvas.addEventListener('mousedown', startDrawing);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', stopDrawing);
                canvas.addEventListener('mouseout', stopDrawing);

                canvas.addEventListener('touchstart', startDrawing);
                canvas.addEventListener('touchmove', draw);
                canvas.addEventListener('touchend', stopDrawing);
            });

            window.clearSignature = function(type) {
                const canvas = canvases[type];
                const ctx = contexts[type];
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            };

            // Photo handling functions - Section-based multiple photos
            window.handleSectionPhotoUpload = function(input, sectionIndex) {
                const files = input.files;
                if (!files || files.length === 0) return;

                // Initialize section photos array if not exists
                if (!window.photos[\`section-\${sectionIndex}\`]) {
                    window.photos[\`section-\${sectionIndex}\`] = [];
                }

                Array.from(files).forEach(file => {
                    // Check file size (max 5MB)
                    if (file.size > 5 * 1024 * 1024) {
                        alert(\`사진 크기는 5MB 이하여야 합니다: \${file.name}\`);
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = function(e) {
                        // Compress and resize image
                        const img = new Image();
                        img.onload = function() {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            
                            // Calculate new dimensions (max 1200px)
                            let width = img.width;
                            let height = img.height;
                            const maxDimension = 1200;
                            
                            if (width > maxDimension || height > maxDimension) {
                                if (width > height) {
                                    height = (height / width) * maxDimension;
                                    width = maxDimension;
                                } else {
                                    width = (width / height) * maxDimension;
                                    height = maxDimension;
                                }
                            }
                            
                            canvas.width = width;
                            canvas.height = height;
                            ctx.drawImage(img, 0, 0, width, height);
                            
                            // Convert to base64 with compression (0.8 quality)
                            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
                            
                            // Store photo
                            const photoId = \`section-\${sectionIndex}-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
                            window.photos[\`section-\${sectionIndex}\`].push({
                                id: photoId,
                                data: compressedDataUrl
                            });
                            
                            // Update UI
                            renderSectionPhotos(sectionIndex);
                        };
                        img.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                });
            };

            window.renderSectionPhotos = function(sectionIndex) {
                const container = document.getElementById(\`section-photos-\${sectionIndex}\`);
                const sectionPhotos = window.photos[\`section-\${sectionIndex}\`] || [];
                
                if (sectionPhotos.length === 0) {
                    container.innerHTML = '';
                    return;
                }
                
                container.innerHTML = sectionPhotos.map(photo => \`
                    <div class="relative inline-block">
                        <img src="\${photo.data}" 
                            class="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-gray-300"
                            onclick="showImageModal(this.src)">
                        <button onclick="deleteSectionPhoto(\${sectionIndex}, '\${photo.id}')"
                            class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition text-xs">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                \`).join('');
            };

            window.deleteSectionPhoto = function(sectionIndex, photoId) {
                if (!confirm('이 사진을 삭제하시겠습니까?')) return;
                
                const sectionPhotos = window.photos[\`section-\${sectionIndex}\`] || [];
                window.photos[\`section-\${sectionIndex}\`] = sectionPhotos.filter(p => p.id !== photoId);
                
                // Clear file input
                const input = document.getElementById(\`section-photo-\${sectionIndex}\`);
                input.value = '';
                
                // Update UI
                renderSectionPhotos(sectionIndex);
            };

            window.showImageModal = function(src) {
                const modal = document.createElement('div');
                modal.className = 'image-modal';
                modal.innerHTML = \`
                    <div style="position: relative; max-width: 90%; max-height: 90%;">
                        <img src="\${src}" alt="사진 크게보기">
                        <button onclick="this.closest('.image-modal').remove()"
                            class="absolute top-0 right-0 bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
                            style="transform: translate(50%, -50%);">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                \`;
                modal.onclick = function(e) {
                    if (e.target === modal) modal.remove();
                };
                document.body.appendChild(modal);
            };


            // PDF 생성 함수 (jsPDF + html2canvas 직접 사용)
            window.generatePDF = async function() {
                try {
                    console.log('🚀 PDF 생성 시작!');
                    
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    loadingOverlay.classList.remove('hidden');
                    
                    // 데이터 수집
                    const installDate = document.getElementById('installDate').value;
                    const vehicleVin = document.getElementById('vehicleVin').value;
                    const mileage = document.getElementById('mileage').value;
                    const selectedProducts = [];
                    document.querySelectorAll('.product-checkbox:checked').forEach(cb => {
                        selectedProducts.push(cb.value);
                    });
                    const otherCheckbox = document.getElementById('otherProductCheckbox');
                    const otherInput = document.getElementById('otherProductInput');
                    if (otherCheckbox && otherCheckbox.checked && otherInput && otherInput.value.trim()) {
                        selectedProducts.push(otherInput.value.trim());
                    }
                    const productName = selectedProducts.join(', ');
                    const installerName = document.getElementById('installerName').value;
                    const customerName = document.getElementById('customerName').value;
                    
                    console.log('📊 수집된 데이터:', { installDate, vehicleVin, mileage, productName });
                    
                    // 체크리스트 데이터
                    const sections = [
                        { title: '차바닥 (태고합판, 알루미늄체크판, 부자재)', items: ['외관, 표면', '고정볼트', '테두리고정 및 마감', '소음'] },
                        { title: '격벽타공판', items: ['외관, 표면, 도장, 로고', '고정볼트', '테두리고정 및 마감'] },
                        { title: '격벽 2단 선반', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '3단 선반 (휠 좌측/우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '부품 3단 선반 (휠 좌측/우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] },
                        { title: '워크스페이스 (휠 우측)', items: ['프레임 및 트레이 외관', '선반높이, 수평', '프레임 상·하단 볼트 고정', '소음'] }
                    ];
                    
                    // HTML 생성
                    let checklistHTML = '';
                    sections.forEach((section, sectionIndex) => {
                        checklistHTML += '<div style="margin-bottom: 20px; break-inside: avoid;">';
                        checklistHTML += '<div style="background: #2c5aa0; color: white; padding: 10px; font-weight: bold; border-radius: 4px; margin-bottom: 10px;">';
                        checklistHTML += section.title;
                        checklistHTML += '</div>';
                        checklistHTML += '<table style="width: 100%; border-collapse: collapse;">';
                        
                        section.items.forEach((item, itemIndex) => {
                            const selector = '[data-section="' + sectionIndex + '"][data-item="' + itemIndex + '"]';
                            const checkbox = document.querySelector(selector);
                            const isChecked = checkbox && checkbox.classList.contains('checked');
                            
                            checklistHTML += '<tr style="border-bottom: 1px solid #e5e7eb;">';
                            checklistHTML += '<td style="padding: 8px 12px;">' + item + '</td>';
                            checklistHTML += '<td style="padding: 8px 12px; text-align: center; width: 60px; font-size: 20px; font-weight: bold; color: #2c5aa0;">';
                            checklistHTML += (isChecked ? '✓' : '□');
                            checklistHTML += '</td>';
                            checklistHTML += '</tr>';
                        });
                        
                        checklistHTML += '</table></div>';
                    });
                    
                    // 사진 HTML
                    let photosHTML = '';
                    if (window.photos && Object.keys(window.photos).length > 0) {
                        photosHTML += '<div style="page-break-before: always; margin-top: 30px;">';
                        photosHTML += '<h2 style="color: #2c5aa0; margin-bottom: 20px; font-size: 20px;">📷 첨부 사진</h2>';
                        
                        Object.entries(window.photos).forEach(([sectionKey, photoArray]) => {
                            if (photoArray && photoArray.length > 0) {
                                const sectionIndex = parseInt(sectionKey.replace('section-', ''));
                                const sectionTitle = sections[sectionIndex]?.title || '섹션 ' + (sectionIndex + 1);
                                
                                photosHTML += '<h3 style="color: #444; margin: 20px 0 10px 0; font-size: 16px;">' + sectionTitle + '</h3>';
                                photosHTML += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">';
                                
                                photoArray.forEach(photo => {
                                    photosHTML += '<div style="border: 2px solid #ddd; border-radius: 8px; overflow: hidden;">';
                                    photosHTML += '<img src="' + photo.data + '" style="width: 100%; height: auto; display: block;" />';
                                    photosHTML += '</div>';
                                });
                                
                                photosHTML += '</div>';
                            }
                        });
                        
                        photosHTML += '</div>';
                    }
                    
                    // 서명 이미지
                    const installerSig = canvases.installer.toDataURL('image/png');
                    const customerSig = canvases.customer.toDataURL('image/png');
                    
                    // 전체 HTML 컨텐츠
                    let pdfHTML = '<div id="pdf-content" style="font-family: Malgun Gothic, 맑은 고딕, Arial, sans-serif; padding: 30px; width: 210mm; background: white;">';
                    pdfHTML += '<div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #2c5aa0; padding-bottom: 20px;">';
                    pdfHTML += '<h1 style="color: #2c5aa0; font-size: 32px; margin: 0 0 10px 0;">케이밴 제품 시공 점검표</h1>';
                    pdfHTML += '<p style="color: #666; font-size: 16px; margin: 0;">Installation Checklist</p>';
                    pdfHTML += '</div>';
                    
                    pdfHTML += '<div style="margin-bottom: 40px; border: 3px solid #2c5aa0; padding: 20px; border-radius: 10px; background: #f8f9fa;">';
                    pdfHTML += '<h2 style="color: #2c5aa0; font-size: 22px; margin: 0 0 20px 0;">📋 시공 정보</h2>';
                    pdfHTML += '<table style="width: 100%; border-collapse: collapse;">';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; width: 120px; color: #444;">시공일자:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + installDate + '</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">차대번호:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + vehicleVin + '</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">주행거리:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + Number(mileage).toLocaleString() + ' km</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">제품명:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + productName + '</td></tr>';
                    pdfHTML += '<tr style="border-bottom: 1px solid #ddd;">';
                    pdfHTML += '<td style="padding: 12px; font-weight: bold; color: #444;">시공자:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + installerName + '</td></tr>';
                    pdfHTML += '<tr><td style="padding: 12px; font-weight: bold; color: #444;">고객명:</td>';
                    pdfHTML += '<td style="padding: 12px;">' + customerName + '</td></tr>';
                    pdfHTML += '</table></div>';
                    
                    pdfHTML += '<div style="margin-bottom: 40px;">';
                    pdfHTML += '<h2 style="color: #2c5aa0; font-size: 22px; margin-bottom: 20px;">✅ 점검 항목</h2>';
                    pdfHTML += checklistHTML;
                    pdfHTML += '</div>';
                    
                    pdfHTML += photosHTML;
                    
                    pdfHTML += '<div style="margin-top: 50px; page-break-inside: avoid;">';
                    pdfHTML += '<h2 style="color: #2c5aa0; font-size: 22px; margin-bottom: 25px;">✍️ 서명</h2>';
                    pdfHTML += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">';
                    pdfHTML += '<div><p style="font-weight: bold; margin-bottom: 15px; font-size: 16px; color: #444;">시공자: ' + installerName + '</p>';
                    pdfHTML += '<div style="border: 3px solid #2c5aa0; border-radius: 10px; padding: 15px; background: #f8f9fa; min-height: 120px;">';
                    pdfHTML += '<img src="' + installerSig + '" style="width: 100%; height: auto; max-height: 100px; object-fit: contain;" /></div></div>';
                    pdfHTML += '<div><p style="font-weight: bold; margin-bottom: 15px; font-size: 16px; color: #444;">고객: ' + customerName + '</p>';
                    pdfHTML += '<div style="border: 3px solid #2c5aa0; border-radius: 10px; padding: 15px; background: #f8f9fa; min-height: 120px;">';
                    pdfHTML += '<img src="' + customerSig + '" style="width: 100%; height: auto; max-height: 100px; object-fit: contain;" /></div></div>';
                    pdfHTML += '</div></div>';
                    
                    pdfHTML += '<div style="margin-top: 60px; text-align: center; color: #666; font-size: 14px; border-top: 3px solid #2c5aa0; padding-top: 20px;">';
                    pdfHTML += '<p style="margin: 0 0 8px 0;"><strong style="font-size: 16px; color: #2c5aa0;">케이밴코리아</strong></p>';
                    pdfHTML += '<p style="margin: 0;">Tel: 1234-5678 | Email: info@kvan.com</p>';
                    pdfHTML += '</div></div>';
                    
                    console.log('✅ PDF HTML 생성 완료');
                    
                    // 임시 DIV 생성 (화면에 보이게 렌더링)
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = pdfHTML;
                    tempDiv.style.position = 'fixed';
                    tempDiv.style.left = '0';
                    tempDiv.style.top = '0';
                    tempDiv.style.width = '210mm';
                    tempDiv.style.background = 'white';
                    tempDiv.style.zIndex = '10000';
                    tempDiv.style.pointerEvents = 'none';
                    document.body.appendChild(tempDiv);
                    
                    console.log('📸 html2canvas 캡처 시작...');
                    
                    // 모바일 디바이스 감지
                    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                    const scale = isMobile ? 1 : 2;
                    console.log('🎯 디바이스:', isMobile ? '모바일' : '데스크톱', '/ Scale:', scale);
                    
                    // 약간의 딜레이 후 캡처 (렌더링 완료 대기)
                    await new Promise(resolve => setTimeout(resolve, 500));
                    
                    const canvas = await html2canvas(tempDiv.querySelector('#pdf-content'), {
                        scale: scale,
                        useCORS: true,
                        logging: false,
                        backgroundColor: '#ffffff',
                        windowWidth: 794,
                        windowHeight: 1123
                    });
                    
                    console.log('✅ 캡처 완료:', canvas.width, 'x', canvas.height);
                    
                    // PDF 생성
                    const { jsPDF } = window.jspdf;
                    const imgData = canvas.toDataURL('image/jpeg', 0.95);
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    
                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const pageHeight = pdf.internal.pageSize.getHeight();
                    const imgWidth = pageWidth;
                    const imgHeight = (canvas.height * pageWidth) / canvas.width;
                    
                    let heightLeft = imgHeight;
                    let position = 0;
                    
                    // 첫 페이지
                    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                    
                    // 추가 페이지들
                    while (heightLeft > 0) {
                        position = heightLeft - imgHeight;
                        pdf.addPage();
                        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }
                    
                    console.log('✅ PDF 생성 완료');
                    
                    // PDF 저장
                    const filename = '케이밴_점검표_' + vehicleVin + '_' + installDate + '.pdf';
                    
                    // iOS 추가 감지 (이미 위에서 isMobile 선언됨)
                    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                    
                    if (isMobile || isIOS) {
                        // 모바일/iOS: Blob URL 방식
                        console.log('📱 모바일 다운로드 시작...');
                        const blob = pdf.output('blob');
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = filename;
                        link.style.display = 'none';
                        document.body.appendChild(link);
                        link.click();
                        
                        setTimeout(() => {
                            document.body.removeChild(link);
                            URL.revokeObjectURL(url);
                            console.log('✅ PDF 다운로드 완료 (모바일)!');
                        }, 100);
                    } else {
                        // 데스크톱: 기존 방식
                        console.log('💻 데스크톱 다운로드 시작...');
                        pdf.save(filename);
                        console.log('✅ PDF 다운로드 완료 (데스크톱)!');
                    }
                    
                    // 정리
                    document.body.removeChild(tempDiv);
                    loadingOverlay.classList.add('hidden');
                    
                } catch (error) {
                    console.error('❌ PDF 생성 오류:', error);
                    console.error('스택 트레이스:', error.stack);
                    document.getElementById('loadingOverlay').classList.add('hidden');
                    alert('PDF 생성 중 오류가 발생했습니다: ' + error.message);
                }
            };


            // 공통 검증 함수 (필수 검증 제거)
            window.validateForm = function() {
                const installDate = document.getElementById('installDate').value;
                const vehicleVin = document.getElementById('vehicleVin').value;
                const mileage = document.getElementById('mileage').value;
                
                // Collect selected products
                const selectedProducts = [];
                document.querySelectorAll('.product-checkbox:checked').forEach(cb => {
                    selectedProducts.push(cb.value);
                });
                
                const otherCheckbox = document.getElementById('otherProductCheckbox');
                const otherInput = document.getElementById('otherProductInput');
                if (otherCheckbox.checked && otherInput.value.trim()) {
                    selectedProducts.push(otherInput.value.trim());
                }
                
                const productName = selectedProducts.join(', ');
                const installerName = document.getElementById('installerName').value;
                const customerName = document.getElementById('customerName').value;
                const customerEmail1 = document.getElementById('customerEmail1').value.trim();

                // 필수 검증 제거 - 모든 데이터 반환
                return {
                    installDate,
                    vehicleVin,
                    mileage,
                    productName,
                    installerName,
                    customerName,
                    customerEmail1
                };
            }


            // 📧 이메일 발송 버튼
            window.submitEmail = async function() {
                console.log('✅ submitEmail 함수 호출됨');
                const formData = window.validateForm();
                if (!formData) {
                    console.log('❌ validateForm 실패');
                    return;
                }
                console.log('✅ validateForm 통과:', formData);
                
                // Collect email addresses
                const customerEmail2 = document.getElementById('customerEmail2').value.trim();
                const customerEmail3 = document.getElementById('customerEmail3').value.trim();
                const emailList = [formData.customerEmail1, customerEmail2, customerEmail3].filter(e => e);
                
                // Validate all email addresses
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                for (const email of emailList) {
                    if (!emailRegex.test(email)) {
                        alert('올바른 이메일 주소를 입력해주세요: ' + email);
                        return;
                    }
                }
                
                // Collect checklist data
                const checklist = {};
                document.querySelectorAll('.touch-checkbox').forEach(checkbox => {
                    const section = checkbox.dataset.section;
                    const item = checkbox.dataset.item;
                    if (!checklist[section]) checklist[section] = {};
                    checklist[section][item] = checkbox.classList.contains('checked');
                });

                // Get signatures
                const installerSignature = canvases.installer.toDataURL('image/png');
                const customerSignature = canvases.customer.toDataURL('image/png');
                
                console.log('📤 제출 데이터:', {
                    사진개수: Object.keys(window.photos).reduce((acc, key) => acc + (window.photos[key]?.length || 0), 0),
                    시공자서명길이: installerSignature.length,
                    고객서명길이: customerSignature.length
                });

                // Flatten photos for API
                const flatPhotos = {};
                Object.entries(window.photos).forEach(([sectionKey, photoArray]) => {
                    if (photoArray && photoArray.length > 0) {
                        photoArray.forEach((photo, index) => {
                            flatPhotos[\`\${sectionKey}-\${index}\`] = photo.data;
                        });
                    }
                });

                // Show loading
                document.getElementById('loadingOverlay').classList.remove('hidden');

                try {
                    const response = await axios.post('/api/submit', {
                        installDate: formData.installDate,
                        vehicleVin: formData.vehicleVin,
                        productName: formData.productName,
                        productConfig: formData.productName,
                        installerName: formData.installerName,
                        customerName: formData.customerName,
                        customerEmail: formData.customerEmail1,
                        emailList,
                        checklist,
                        installerSignature,
                        customerSignature,
                        photos: flatPhotos
                    });

                    if (response.data.success) {
                        alert(\`✅ 점검표가 성공적으로 제출되었습니다!\\n\${emailList.length}개 이메일로 발송되었습니다.\`);
                        window.location.reload();
                    } else {
                        throw new Error(response.data.error || '제출 실패');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const errorData = error.response?.data;
                    let errorMessage = '❌ 제출 중 오류가 발생했습니다.\\n\\n';
                    
                    if (errorData) {
                        errorMessage += errorData.error || error.message;
                        if (errorData.hint) {
                            errorMessage += '\\n\\n💡 ' + errorData.hint;
                        }
                    } else {
                        errorMessage += error.message;
                    }
                    
                    alert(errorMessage);
                } finally {
                    document.getElementById('loadingOverlay').classList.add('hidden');
                }
            };


            // 📄 PDF 다운로드 버튼
            window.downloadJPG = async function() {
                console.log('✅ downloadJPG 함수 호출됨');
                const formData = window.validateForm();
                if (!formData) {
                    console.log('❌ validateForm 실패');
                    return;
                }
                console.log('✅ validateForm 통과, JPG 생성 시작');
                
                try {
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    loadingOverlay.classList.remove('hidden');
                    
                    // 전체 페이지 캡처 (버튼 제외)
                    const container = document.querySelector('.container');
                    const buttons = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.gap-4.mb-6');
                    
                    // 버튼 숨기기
                    if (buttons) buttons.style.display = 'none';
                    
                    // html2canvas로 전체 페이지 캡처
                    const canvas = await html2canvas(container, {
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        backgroundColor: '#ffffff',
                        logging: false,
                        scrollY: -window.scrollY,
                        scrollX: -window.scrollX,
                        windowWidth: container.scrollWidth,
                        windowHeight: container.scrollHeight
                    });
                    
                    // 버튼 다시 표시
                    if (buttons) buttons.style.display = '';
                    
                    // Canvas를 JPG로 변환
                    const imageData = canvas.toDataURL('image/jpeg', 0.95);
                    
                    // 파일명 생성
                    const vehicleVin = document.getElementById('vehicleVin').value;
                    const installDate = document.getElementById('installDate').value;
                    const fileName = '케이밴_점검표_' + vehicleVin + '_' + installDate + '.jpg';
                    
                    // 다운로드
                    const link = document.createElement('a');
                    link.href = imageData;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    loadingOverlay.classList.add('hidden');
                    console.log('✅ JPG 다운로드 완료!');
                    
                } catch (error) {
                    console.error('❌ JPG 생성 오류:', error);
                    alert('JPG 생성 중 오류가 발생했습니다: ' + error.message);
                    const loadingOverlay = document.getElementById('loadingOverlay');
                    loadingOverlay.classList.add('hidden');
                }
            };


            // Submit checklist (레거시, 사용 안 함)
            window.submitChecklist = async function() {
                // Validate form
                const installDate = document.getElementById('installDate').value;
                const vehicleVin = document.getElementById('vehicleVin').value;
                
                // Collect selected products
                const selectedProducts = [];
                document.querySelectorAll('.product-checkbox:checked').forEach(cb => {
                    selectedProducts.push(cb.value);
                });
                
                // Check "기타" input
                const otherCheckbox = document.getElementById('otherProductCheckbox');
                const otherInput = document.getElementById('otherProductInput');
                if (otherCheckbox.checked && otherInput.value.trim()) {
                    selectedProducts.push(otherInput.value.trim());
                }
                
                const productName = selectedProducts.join(', ');
                const productConfig = productName; // 동일한 값
                
                const installerName = document.getElementById('installerName').value;
                const customerName = document.getElementById('customerName').value;
                
                // Collect email addresses
                const customerEmail1 = document.getElementById('customerEmail1').value.trim();
                const customerEmail2 = document.getElementById('customerEmail2').value.trim();
                const customerEmail3 = document.getElementById('customerEmail3').value.trim();
                
                // Collect all valid emails
                const emailList = [customerEmail1, customerEmail2, customerEmail3].filter(e => e);
                const customerEmail = customerEmail1; // Primary email for backward compatibility

                if (!installDate || !vehicleVin || !productName || 
                    !installerName || !customerName || !customerEmail1) {
                    alert('모든 필수 항목을 입력해주세요.\\n제품 시공명은 최소 1개 이상 선택해야 합니다.');
                    return;
                }

                // Validate all email addresses
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                for (const email of emailList) {
                    if (!emailRegex.test(email)) {
                        alert(\`올바른 이메일 주소를 입력해주세요: \${email}\`);
                        return;
                    }
                }

                // Collect checklist data
                const checklist = {};
                document.querySelectorAll('.touch-checkbox').forEach(cb => {
                    const section = cb.dataset.section;
                    const item = cb.dataset.item;
                    if (!checklist[section]) checklist[section] = {};
                    checklist[section][item] = cb.classList.contains('checked');
                });

                // Get signatures (PNG format with transparency)
                const installerSignature = canvases.installer.toDataURL('image/png');
                const customerSignature = canvases.customer.toDataURL('image/png');
                
                console.log('📝 서명 데이터 크기:', {
                    installer: installerSignature.length,
                    customer: customerSignature.length
                });

                // Check if signatures are empty
                if (isSignatureEmpty(canvases.installer)) {
                    alert('시공자 서명을 해주세요.');
                    return;
                }

                if (isSignatureEmpty(canvases.customer)) {
                    alert('고객 서명을 해주세요.');
                    return;
                }

                // Debug log - Convert section photos to flat structure
                const flatPhotos = {};
                let totalPhotoCount = 0;
                Object.keys(window.photos).forEach(sectionKey => {
                    if (Array.isArray(window.photos[sectionKey])) {
                        window.photos[sectionKey].forEach((photo, idx) => {
                            flatPhotos[\`\${sectionKey}-\${idx}\`] = photo.data;
                            totalPhotoCount++;
                        });
                    }
                });
                
                console.log('📤 제출 데이터:', {
                    사진개수: totalPhotoCount,
                    섹션별사진: Object.keys(window.photos).map(k => \`\${k}: \${window.photos[k]?.length || 0}장\`),
                    시공자서명길이: installerSignature.length,
                    고객서명길이: customerSignature.length,
                    이메일개수: emailList.length
                });

                // Show loading
                document.getElementById('loadingOverlay').classList.remove('hidden');

                try {
                    const response = await axios.post('/api/submit', {
                        installDate,
                        vehicleVin,
                        productName,
                        productConfig,
                        installerName,
                        customerName,
                        customerEmail,
                        emailList,
                        checklist,
                        installerSignature,
                        customerSignature,
                        photos: flatPhotos
                    });

                    if (response.data.success) {
                        // 이메일 발송 성공 메시지
                        const downloadPDF = confirm(
                            \`✅ 점검표가 성공적으로 제출되었습니다!\\n\${emailList.length}개 이메일로 발송되었습니다.\\n\\n📄 PDF 파일로 다운로드 하시겠습니까?\\n(보관 및 출력용)\`
                        );
                        
                        if (downloadPDF) {
                            // PDF 다운로드
                            await generatePDF();
                        }
                        
                        // Optionally redirect or reset form
                        window.location.reload();
                    } else {
                        throw new Error(response.data.error || '제출 실패');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    const errorData = error.response?.data;
                    let errorMessage = '❌ 제출 중 오류가 발생했습니다.\\n\\n';
                    
                    if (errorData) {
                        errorMessage += errorData.error || error.message;
                        if (errorData.hint) {
                            errorMessage += '\\n\\n💡 ' + errorData.hint;
                        }
                    } else {
                        errorMessage += error.message;
                    }
                    
                    alert(errorMessage);
                } finally {
                    document.getElementById('loadingOverlay').classList.add('hidden');
                }
            };
        </script>
    </body>
    </html>
  `)
})

// API endpoint to handle form submission
app.post('/api/submit', async (c) => {
  try {
    const data = await c.req.json() as ChecklistData
    
    console.log('📝 Received checklist submission')
    console.log('Email List:', data.emailList)
    console.log('Email Count:', data.emailList?.length || 0)
    console.log('Photos count:', Object.keys(data.photos || {}).length)
    console.log('Photos keys:', Object.keys(data.photos || {}))
    console.log('Installer signature length:', data.installerSignature?.length || 0)
    console.log('Customer signature length:', data.customerSignature?.length || 0)
    
    // Get environment variables
    const { RESEND_API_KEY, FROM_EMAIL, FROM_NAME } = c.env
    
    // Check if API key is configured
    if (!RESEND_API_KEY || RESEND_API_KEY === 'your_resend_api_key_here') {
      console.warn('⚠️  Resend API key not configured')
      return c.json({ 
        success: false, 
        error: 'Email service not configured. Please set RESEND_API_KEY in environment variables.',
        debug: {
          message: 'API key missing or using default value',
          photosCount: Object.keys(data.photos || {}).length,
          customerEmail: data.customerEmail,
          hint: 'Get your API key from https://resend.com and add it to .dev.vars or wrangler secrets'
        }
      }, 503)
    }
    
    try {
      // Generate HTML email with CID references for photos
      console.log('📧 Generating email HTML with photos...')
      
      // Prepare attachments array for Resend
      const attachments: any[] = []
      
      // Add photos as attachments with CID (Content-ID)
      Object.entries(data.photos || {}).forEach(([key, base64Data]) => {
        // Extract base64 data without the data URL prefix
        const matches = base64Data.match(/^data:([^;]+);base64,(.+)$/)
        if (matches) {
          const mimeType = matches[1]
          const content = matches[2]
          const extension = mimeType.split('/')[1] || 'jpg'
          
          attachments.push({
            filename: `photo_${key}.${extension}`,
            content: content,
            content_id: `photo_${key}`,
            disposition: 'inline'
          })
        }
      })
      
      // Add signatures as inline attachments
      const installerSigMatch = data.installerSignature.match(/^data:([^;]+);base64,(.+)$/)
      if (installerSigMatch) {
        attachments.push({
          filename: 'installer_signature.png',
          content: installerSigMatch[2],
          content_id: 'installer_signature',
          disposition: 'inline'
        })
      }
      
      const customerSigMatch = data.customerSignature.match(/^data:([^;]+);base64,(.+)$/)
      if (customerSigMatch) {
        attachments.push({
          filename: 'customer_signature.png',
          content: customerSigMatch[2],
          content_id: 'customer_signature',
          disposition: 'inline'
        })
      }
      
      // Generate email HTML with CID references instead of base64
      const emailHTML = generateEmailHTMLWithCID(data)
      console.log('✅ Email HTML generated with', attachments.length, 'attachments')
      
      // Send email using Resend REST API
      console.log('📤 Sending email via Resend REST API...')
      
      const fromName = FROM_NAME || '(주)케이밴'
      const fromEmail = FROM_EMAIL || 'noreply@yourdomain.com'
      const emailSubject = '케이밴 제품 시공 점검표 - ' + data.vehicleVin
      
      const emailPayload: any = {
        from: fromName + ' <' + fromEmail + '>',
        to: data.emailList || [data.customerEmail],
        subject: emailSubject,
        html: emailHTML
      }
      
      // Add attachments if any
      if (attachments.length > 0) {
        emailPayload.attachments = attachments
      }
      
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + RESEND_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error('Resend API error: ' + JSON.stringify(errorData))
      }
      
      const emailResponse = await response.json()
      console.log('✅ Email sent successfully:', emailResponse)
      
      return c.json({ 
        success: true, 
        message: 'Checklist submitted and email sent successfully',
        data: {
          emailList: data.emailList || [data.customerEmail],
          emailCount: data.emailList?.length || 1,
          installDate: data.installDate,
          vehicleVin: data.vehicleVin,
          photosCount: Object.keys(data.photos || {}).length,
          emailId: emailResponse.id
        }
      })
      
    } catch (emailError: any) {
      console.error('❌ Email sending error:', emailError)
      
      // Check if this is a Resend validation error
      const errorMessage = emailError.message || 'Unknown email error'
      const isResendValidationError = errorMessage.includes('You can only send testing emails')
      
      // Return detailed error for debugging
      return c.json({ 
        success: false, 
        error: isResendValidationError 
          ? '⚠️ Resend 테스트 모드 제한: 본인 이메일(designsoul2007@gmail.com)로만 전송 가능합니다. 다른 이메일로 전송하려면 도메인 인증이 필요합니다.'
          : 'Failed to send email',
        details: errorMessage,
        hint: isResendValidationError 
          ? '프로덕션 배포 시 https://resend.com/domains 에서 도메인을 인증하세요.'
          : undefined,
        debug: {
          apiKeyExists: !!RESEND_API_KEY,
          apiKeyValid: RESEND_API_KEY !== 'your_resend_api_key_here',
          fromEmail: FROM_EMAIL,
          toEmails: data.emailList || [data.customerEmail],
          isTestMode: isResendValidationError
        }
      }, 500)
    }
    
  } catch (error: any) {
    console.error('❌ Submit error:', error)
    return c.json({ 
      success: false, 
      error: error.message || 'Failed to submit checklist',
      stack: error.stack
    }, 500)
  }
})

export default app
