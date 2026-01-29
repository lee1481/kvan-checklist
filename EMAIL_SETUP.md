# 🎉 케이밴 시공 점검표 - 이메일 발송 설정 가이드

## ✅ 완료된 기능

### 1. 사진 첨부 ✓
- 각 점검 항목별 사진 업로드
- 자동 압축 및 최적화 (1200px, 80% 품질)
- 실시간 미리보기

### 2. 이메일 자동 발송 ✓
- **Resend API** 통합 완료
- 사진이 포함된 HTML 이메일 생성
- 체크 항목 및 서명 포함
- 고객 이메일로 자동 발송

## 📧 이메일 기능 사용 방법

### Resend API 키 받기

1. **Resend 가입** (무료)
   - https://resend.com 접속
   - Sign Up 클릭
   - 이메일로 가입

2. **API 키 생성**
   - 로그인 후 Dashboard로 이동
   - "API Keys" 메뉴 클릭
   - "Create API Key" 버튼 클릭
   - 이름 입력 (예: "케이밴 점검표")
   - 생성된 키 복사 (re_로 시작하는 긴 문자열)

3. **무료 플랜 제한**
   - 월 3,000 통 이메일 무료
   - 최대 10MB 이메일 크기
   - 충분히 사용 가능!

### 환경변수 설정

`.dev.vars` 파일에 API 키 추가:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=noreply@yourdomain.com
FROM_NAME=케이밴 경북지사
```

### 프로덕션 배포 시

Cloudflare Pages Secrets 등록:
```bash
cd /home/user/webapp

# API 키 등록
npx wrangler pages secret put RESEND_API_KEY --project-name kvan-checklist
# 입력 프롬프트가 나오면 re_로 시작하는 키 붙여넣기

# 발신 이메일 등록
npx wrangler pages secret put FROM_EMAIL --project-name kvan-checklist
# 예: noreply@케이밴도메인.com

# 발신자 이름 등록
npx wrangler pages secret put FROM_NAME --project-name kvan-checklist
# 예: 케이밴 경북지사
```

## 🧪 테스트 방법

### 1. API 키 없이 테스트 (현재 상태)
웹앱은 정상 작동하지만, 완료 버튼 클릭 시:
```json
{
  "success": false,
  "error": "Email service not configured..."
}
```

### 2. API 키 있을 때 (실제 이메일 발송)
완료 버튼 클릭 시:
```json
{
  "success": true,
  "message": "Checklist submitted and email sent successfully",
  "data": {
    "emailId": "xxx-yyy-zzz",
    "photosCount": 5
  }
}
```

고객 이메일로 다음 내용이 발송됩니다:
- ✅ 시공 정보 (일자, 차대번호, 제품명 등)
- ✅ 점검 완료 항목 통계
- ✅ 모든 점검 항목 체크 상태
- ✅ **첨부된 사진들 (HTML에 직접 임베드)**
- ✅ 시공자 & 고객 디지털 서명
- ✅ 케이밴 경북지사 연락처

## 🌐 현재 접속 URL

**https://3000-iw3be9zf2hohe1e3yfcxw-c81df28e.sandbox.novita.ai**

## 🚀 다음 단계 선택지

1. **Resend API 키 추가** → 실제 이메일 발송 테스트
2. **Cloudflare Pages 배포** → 프로덕션 환경에 배포
3. **PDF 생성 기능** → 브라우저에서 PDF 생성 후 첨부
4. **D1 Database** → 점검표 이력 저장

---

궁금한 점이 있으시면 말씀해주세요! 😊
