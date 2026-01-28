# 케이밴 제품 시공 점검표 웹앱 📋

## 프로젝트 개요
케이밴 제품 시공 점검표를 디지털화한 **태블릿 최적화 웹 애플리케이션**입니다. 
현장에서 터치로 체크하고 디지털 서명 후 고객 이메일로 자동 발송하는 스마트 점검표 시스템입니다.

## ✅ 완료된 기능

### 1. 태블릿 친화적 UI
- ✅ 큰 터치 영역의 체크박스 (50x50px)
- ✅ 반응형 디자인 (모바일/태블릿 최적화)
- ✅ 터치 피드백 애니메이션
- ✅ 확대/축소 방지 (user-scalable=no)

### 2. 시공 정보 입력 폼
- ✅ 시공일자 (Date picker)
- ✅ 차량 차대번호
- ✅ 제품 시공명
- ✅ 제품 구성 (textarea)

### 3. 점검 체크리스트
다음 6개 섹션으로 구성:
- ✅ 차바닥 (태고합판, 알루미늄체크판, 부자재)
- ✅ 격벽타공판
- ✅ 격벽 2단 선반
- ✅ 3단 선반 (휠 좌측/우측)
- ✅ 부품 3단 선반 (휠 좌측/우측)
- ✅ 워크스페이스 (휠 우측)

### 4. 디지털 서명 기능
- ✅ Canvas 기반 서명 패드
- ✅ 시공자 서명 (이름 + 서명)
- ✅ 고객 서명 (이름 + 이메일 + 서명)
- ✅ 서명 지우기 기능
- ✅ 마우스 및 터치 입력 지원

### 5. 폼 유효성 검증
- ✅ 필수 항목 입력 확인
- ✅ 이메일 형식 검증
- ✅ 서명 완료 여부 확인
- ✅ 사용자 친화적 오류 메시지

### 6. API 엔드포인트
- ✅ `POST /api/submit` - 점검표 제출

## 🚧 구현 예정 기능

### 1. 이메일 발송 기능 (우선순위 높음)
- ⏳ Resend API 또는 SendGrid 통합
- ⏳ HTML 이메일 템플릿 생성
- ⏳ PDF 첨부 파일 생성
- ⏳ 발송 실패 시 재시도 로직

### 2. PDF 생성 기능
- ⏳ 완료된 점검표를 PDF로 변환
- ⏳ 서명 이미지 포함
- ⏳ 체크 항목 시각화
- ⏳ 브랜드 로고 및 스타일링

### 3. 데이터 저장 (선택적)
- ⏳ Cloudflare D1 데이터베이스 통합
- ⏳ 점검표 이력 조회
- ⏳ 통계 대시보드

### 4. 추가 기능
- ⏳ 사진 첨부 기능 (시공 전후 비교)
- ⏳ 오프라인 모드 (Service Worker)
- ⏳ 다국어 지원 (영문/중문)
- ⏳ QR 코드 생성 (점검표 링크 공유)

## 📡 현재 접속 URL

### 개발 서버 (Sandbox)
- **URL**: https://3000-iw3be9zf2hohe1e3yfcxw-c81df28e.sandbox.novita.ai
- **상태**: ✅ 활성
- **용도**: 개발 및 테스트

### 프로덕션 (예정)
- **URL**: TBD (Cloudflare Pages 배포 후)
- **상태**: ⏳ 배포 예정

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **Tailwind CSS** - 스타일링 (CDN)
- **Vanilla JavaScript** - 인터랙티브 기능
- **Canvas API** - 디지털 서명
- **Axios** - HTTP 클라이언트

### Backend
- **Hono** - 경량 웹 프레임워크
- **Cloudflare Workers** - Edge 런타임
- **Wrangler** - CLI 도구

### 개발 도구
- **Vite** - 빌드 도구
- **PM2** - 프로세스 관리 (개발 환경)
- **Git** - 버전 관리

## 📦 데이터 구조

### 점검표 제출 데이터
```json
{
  "installDate": "2026-01-28",
  "vehicleVin": "KMHXX00XXXX000000",
  "productName": "케이밴 풀 패키지",
  "productConfig": "차바닥, 격벽타공판, 2단선반, 3단선반",
  "installerName": "홍길동",
  "customerName": "김철수",
  "customerEmail": "customer@example.com",
  "checklist": {
    "0": {
      "0": true,
      "1": true,
      "2": false,
      "3": true
    },
    ...
  },
  "installerSignature": "data:image/png;base64,...",
  "customerSignature": "data:image/png;base64,..."
}
```

## 🚀 로컬 개발 가이드

### 1. 프로젝트 시작
```bash
cd /home/user/webapp
npm install
```

### 2. 빌드
```bash
npm run build
```

### 3. 개발 서버 시작
```bash
# PM2로 시작 (권장)
pm2 start ecosystem.config.cjs

# 또는 직접 실행
npm run dev:sandbox
```

### 4. 테스트
```bash
curl http://localhost:3000
```

### 5. 로그 확인
```bash
pm2 logs kvan-checklist --nostream
```

## 📧 이메일 발송 설정 가이드 (다음 단계)

### 필요한 API 키
1. **Resend API** (추천)
   - https://resend.com 가입
   - API 키 생성
   - 도메인 인증 (선택적)

2. **SendGrid API** (대안)
   - https://sendgrid.com 가입
   - API 키 생성

### 환경 변수 설정
```bash
# .dev.vars 파일 생성
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=noreply@yourdomain.com
```

### Cloudflare Pages 배포 시
```bash
# Secret 등록
wrangler pages secret put RESEND_API_KEY --project-name kvan-checklist
wrangler pages secret put FROM_EMAIL --project-name kvan-checklist
```

## 📋 사용 가이드

### 시공자용
1. 웹앱 접속 (태블릿 권장)
2. 시공 정보 입력
   - 시공일자, 차대번호, 제품명, 구성 입력
3. 각 항목 체크
   - 완료된 항목을 터치하여 체크
4. 시공자 정보 및 서명
   - 이름 입력 후 서명 패드에 서명
5. 고객 정보 및 서명
   - 고객 이름, 이메일 입력 후 서명 받기
6. **완료 및 이메일 발송** 버튼 클릭
   - 자동으로 고객 이메일로 점검표 발송

### 고객용
1. 이메일 수신
   - 점검표 PDF 첨부파일 확인
2. 다운로드 및 보관
   - A/S 및 보증 관련 증빙 자료로 활용

## 🔐 보안 고려사항

- ✅ HTTPS 통신 (Cloudflare Pages 기본 제공)
- ✅ CORS 설정 (API 라우트만 허용)
- ✅ 이메일 형식 검증
- ⏳ Rate Limiting (구현 예정)
- ⏳ API 키 보안 관리 (Cloudflare Secrets)

## 📊 다음 개발 단계

### Phase 1: 이메일 발송 (1-2일)
1. Resend API 통합
2. HTML 이메일 템플릿 작성
3. PDF 생성 라이브러리 통합 (jsPDF 또는 Cloudflare Workers AI)
4. 테스트 및 디버깅

### Phase 2: 데이터 저장 (2-3일)
1. Cloudflare D1 데이터베이스 설정
2. 점검표 저장 로직 구현
3. 조회 API 개발
4. 관리자 대시보드 (간단한 버전)

### Phase 3: 추가 기능 (3-5일)
1. 사진 첨부 (R2 Storage)
2. 오프라인 모드
3. QR 코드 생성
4. 통계 및 리포트

## 📞 케이밴 경북지사 정보

- **전화**: 053-XXX-XXXX
- **이메일**: kvan@example.com
- **A/S 보증**: 3년 또는 6만km (선도래 기준)

## 📝 라이선스

© 2026 케이밴. All Rights Reserved.

---

**최종 업데이트**: 2026년 1월 28일  
**개발자**: 사인마스터 (AI 기반 간판 디자인 자동화 전문가)  
**버전**: v1.0.0-beta
