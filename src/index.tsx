import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

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
                            required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">차량 차대번호</label>
                        <input type="text" id="vehicleVin" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="차대번호를 입력하세요" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">제품 시공명</label>
                        <input type="text" id="productName" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="예: 케이밴 풀 패키지" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">제품 구성</label>
                        <textarea id="productConfig" rows="3"
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="예: 차바닥, 격벽타공판, 2단선반, 3단선반 등" required></textarea>
                    </div>
                </div>
            </div>

            <!-- Checklist Sections -->
            <div id="checklist-container"></div>

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
                            placeholder="시공자 이름" required>
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
                            placeholder="고객 이름" required>
                    </div>
                    <div class="mb-3">
                        <label class="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                        <input type="email" id="customerEmail" 
                            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg"
                            placeholder="example@email.com" required>
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
                    <strong>안내:</strong> 모든 항목을 확인하고 서명 후 완료 버튼을 눌러주세요. 
                    입력하신 이메일로 점검표가 자동 발송됩니다.
                </p>
            </div>

            <!-- Submit Button -->
            <button id="submitBtn" onclick="submitChecklist()" 
                class="w-full bg-blue-900 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-800 transition shadow-lg">
                <i class="fas fa-paper-plane mr-2"></i>
                완료 및 이메일 발송
            </button>

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

            // Store photos
            const photos = {};

            // Render checklist sections
            const container = document.getElementById('checklist-container');
            checklistSections.forEach((section, sectionIndex) => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'bg-white rounded-lg shadow-lg p-6 mb-6 section-card';
                sectionDiv.innerHTML = \`
                    <h2 class="text-lg font-bold text-blue-900 mb-4">\${section.title}</h2>
                    <div class="space-y-3">
                        \${section.items.map((item, itemIndex) => \`
                            <div class="p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="flex-1 text-base">\${item}</span>
                                    <div class="flex gap-2">
                                        <input type="file" 
                                            id="photo-\${sectionIndex}-\${itemIndex}" 
                                            accept="image/*" 
                                            capture="environment"
                                            class="hidden"
                                            onchange="handlePhotoUpload(this, \${sectionIndex}, \${itemIndex})">
                                        <label for="photo-\${sectionIndex}-\${itemIndex}" 
                                            class="photo-button"
                                            id="photo-btn-\${sectionIndex}-\${itemIndex}">
                                            <i class="fas fa-camera text-2xl"></i>
                                        </label>
                                        <div class="touch-checkbox" 
                                            data-section="\${sectionIndex}" 
                                            data-item="\${itemIndex}"
                                            onclick="toggleCheck(this)">
                                            <i class="fas fa-check text-2xl hidden"></i>
                                        </div>
                                    </div>
                                </div>
                                <div id="photo-preview-\${sectionIndex}-\${itemIndex}" class="hidden">
                                    <div class="relative inline-block">
                                        <img class="photo-preview cursor-pointer" 
                                            onclick="showImageModal(this.src)">
                                        <button onclick="deletePhoto(\${sectionIndex}, \${itemIndex})"
                                            class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
                                            style="transform: translate(25%, -25%);">
                                            <i class="fas fa-times"></i>
                                        </button>
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
                    const x = (e.clientX || e.touches[0].clientX) - rect.left;
                    const y = (e.clientY || e.touches[0].clientY) - rect.top;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                };

                const draw = (e) => {
                    if (!isDrawing[type]) return;
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    const x = (e.clientX || e.touches[0].clientX) - rect.left;
                    const y = (e.clientY || e.touches[0].clientY) - rect.top;
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

            // Photo handling functions
            window.handlePhotoUpload = function(input, sectionIndex, itemIndex) {
                const file = input.files[0];
                if (!file) return;

                // Check file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('사진 크기는 5MB 이하여야 합니다.');
                    input.value = '';
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
                        const photoKey = \`\${sectionIndex}-\${itemIndex}\`;
                        photos[photoKey] = compressedDataUrl;
                        
                        // Update UI
                        const previewContainer = document.getElementById(\`photo-preview-\${sectionIndex}-\${itemIndex}\`);
                        const previewImg = previewContainer.querySelector('img');
                        const photoBtn = document.getElementById(\`photo-btn-\${sectionIndex}-\${itemIndex}\`);
                        
                        previewImg.src = compressedDataUrl;
                        previewContainer.classList.remove('hidden');
                        photoBtn.classList.add('has-photo');
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            };

            window.deletePhoto = function(sectionIndex, itemIndex) {
                if (!confirm('이 사진을 삭제하시겠습니까?')) return;
                
                const photoKey = \`\${sectionIndex}-\${itemIndex}\`;
                delete photos[photoKey];
                
                // Clear file input
                const input = document.getElementById(\`photo-\${sectionIndex}-\${itemIndex}\`);
                input.value = '';
                
                // Update UI
                const previewContainer = document.getElementById(\`photo-preview-\${sectionIndex}-\${itemIndex}\`);
                const photoBtn = document.getElementById(\`photo-btn-\${sectionIndex}-\${itemIndex}\`);
                
                previewContainer.classList.add('hidden');
                photoBtn.classList.remove('has-photo');
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


            // Submit checklist
            window.submitChecklist = async function() {
                // Validate form
                const installDate = document.getElementById('installDate').value;
                const vehicleVin = document.getElementById('vehicleVin').value;
                const productName = document.getElementById('productName').value;
                const productConfig = document.getElementById('productConfig').value;
                const installerName = document.getElementById('installerName').value;
                const customerName = document.getElementById('customerName').value;
                const customerEmail = document.getElementById('customerEmail').value;

                if (!installDate || !vehicleVin || !productName || !productConfig || 
                    !installerName || !customerName || !customerEmail) {
                    alert('모든 필수 항목을 입력해주세요.');
                    return;
                }

                // Validate email
                const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                if (!emailRegex.test(customerEmail)) {
                    alert('올바른 이메일 주소를 입력해주세요.');
                    return;
                }

                // Collect checklist data
                const checklist = {};
                document.querySelectorAll('.touch-checkbox').forEach(cb => {
                    const section = cb.dataset.section;
                    const item = cb.dataset.item;
                    if (!checklist[section]) checklist[section] = {};
                    checklist[section][item] = cb.classList.contains('checked');
                });

                // Get signatures
                const installerSignature = canvases.installer.toDataURL();
                const customerSignature = canvases.customer.toDataURL();

                // Check if signatures are empty
                const isSignatureEmpty = (canvas) => {
                    const ctx = canvas.getContext('2d');
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                    return !imageData.some(channel => channel !== 0);
                };

                if (isSignatureEmpty(canvases.installer)) {
                    alert('시공자 서명을 해주세요.');
                    return;
                }

                if (isSignatureEmpty(canvases.customer)) {
                    alert('고객 서명을 해주세요.');
                    return;
                }

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
                        checklist,
                        installerSignature,
                        customerSignature,
                        photos: photos
                    });

                    if (response.data.success) {
                        alert('✅ 점검표가 성공적으로 제출되었습니다!\\n이메일이 발송되었습니다.');
                        // Optionally redirect or reset form
                        window.location.reload();
                    } else {
                        throw new Error(response.data.error || '제출 실패');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('❌ 제출 중 오류가 발생했습니다.\\n' + (error.response?.data?.error || error.message));
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
    const data = await c.req.json()
    
    // Log received data (for debugging)
    console.log('Received checklist submission')
    console.log('Customer Email:', data.customerEmail)
    console.log('Photos count:', Object.keys(data.photos || {}).length)
    
    // TODO: Here you would:
    // 1. Generate PDF from the data (including photos)
    // 2. Send email using Resend API or similar
    // 3. Store data and photos if needed (Cloudflare R2)
    
    // For now, return success with photo count
    return c.json({ 
      success: true, 
      message: 'Checklist submitted successfully',
      data: {
        customerEmail: data.customerEmail,
        installDate: data.installDate,
        vehicleVin: data.vehicleVin,
        photosCount: Object.keys(data.photos || {}).length
      }
    })
  } catch (error) {
    console.error('Submit error:', error)
    return c.json({ 
      success: false, 
      error: error.message || 'Failed to submit checklist' 
    }, 500)
  }
})

export default app
