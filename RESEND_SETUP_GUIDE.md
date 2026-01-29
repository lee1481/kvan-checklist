# 🔑 Resend API 키 설정 가이드

## 현재 상태
✅ 이메일 발송 코드 완성  
✅ PDF 생성 기능 완성  
✅ 사진 첨부 기능 완성  
⏳ **Resend API 키만 추가하면 즉시 작동!**

---

## 📋 Resend API 키 설정 방법

### 1️⃣ Resend에서 API 키 생성

1. https://resend.com 접속 및 로그인
2. 왼쪽 메뉴에서 **"API Keys"** 클릭
3. **"Add API Key"** 버튼 클릭
4. API 키 이름 입력 (예: "케이밴 점검표")
5. **Permission**: `Sending access` 선택
6. **Create** 클릭
7. 🔑 생성된 API 키 복사 (예: `re_xxxxxxxxxxxxx`)

⚠️ **중요**: API 키는 한 번만 표시됩니다! 반드시 복사해두세요.

---

### 2️⃣ 로컬 개발 환경에 API 키 추가

#### 방법 A: .dev.vars 파일 수정 (권장)

```bash
cd /home/user/webapp

# .dev.vars 파일 편집
nano .dev.vars
```

다음과 같이 수정:
```bash
# Resend API Configuration
RESEND_API_KEY=re_실제API키여기붙여넣기
FROM_EMAIL=noreply@yourdomain.com
FROM_NAME=케이밴 경북지사
```

저장 후 (Ctrl+O, Enter, Ctrl+X), 서비스 재시작:
```bash
cd /home/user/webapp
pm2 restart kvan-checklist
```

#### 방법 B: 직접 명령어로 설정

```bash
cd /home/user/webapp
echo "RESEND_API_KEY=re_실제API키" >> .dev.vars
echo "FROM_EMAIL=noreply@yourdomain.com" >> .dev.vars
echo "FROM_NAME=케이밴 경북지사" >> .dev.vars
pm2 restart kvan-checklist
```

---

### 3️⃣ 프로덕션 (Cloudflare Pages) 배포 시

```bash
# Cloudflare Pages Secret 등록
npx wrangler pages secret put RESEND_API_KEY --project-name kvan-checklist
# 프롬프트에서 API 키 입력

npx wrangler pages secret put FROM_EMAIL --project-name kvan-checklist
# noreply@yourdomain.com 입력

npx wrangler pages secret put FROM_NAME --project-name kvan-checklist
# 케이밴 경북지사 입력
```

---

## 📧 이메일 발신 주소 설정

### 무료 플랜 (테스트용)
- Resend 기본 도메인 사용 가능
- `FROM_EMAIL=onboarding@resend.dev` (테스트 전용)
- ⚠️ 일부 이메일 서비스에서 스팸으로 분류될 수 있음

### 프로덕션 (권장)
1. 본인 도메인 소유 필요 (예: `kvan.com`)
2. Resend 대시보드 → **Domains** → **Add Domain**
3. DNS 레코드 추가 (Resend 제공)
4. 인증 완료 후 사용
5. `FROM_EMAIL=noreply@kvan.com`

---

## 🧪 테스트 방법

### 1. API 키 설정 확인
```bash
curl http://localhost:3000/api/submit \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"customerEmail":"test@test.com"}'
```

**응답이 이렇게 나오면 API 키 미설정:**
```json
{
  "success": false,
  "error": "Email service not configured..."
}
```

**응답이 이렇게 나오면 정상 (실제 이메일 발송됨):**
```json
{
  "success": true,
  "message": "Checklist submitted and email sent successfully",
  "data": {...}
}
```

### 2. 웹 UI에서 테스트
1. https://3000-iw3be9zf2hohe1e3yfcxw-c81df28e.sandbox.novita.ai 접속
2. 점검표 작성
3. 본인 이메일 주소 입력
4. 완료 버튼 클릭
5. 이메일 수신 확인 📧

---

## 📊 Resend 무료 플랜 제한

- ✅ **월 3,000통 무료**
- ✅ **월 100통 (자체 도메인 없이)**
- ✅ 모든 기능 사용 가능
- ✅ 첨부파일 지원 (최대 40MB)

충분히 테스트 및 소규모 운영 가능! 🎉

---

## 🔧 문제 해결

### "Email service not configured" 오류
- `.dev.vars` 파일에 API 키가 올바르게 설정되었는지 확인
- `pm2 restart kvan-checklist`로 재시작
- `pm2 logs kvan-checklist --nostream`로 로그 확인

### "Invalid API key" 오류
- API 키가 `re_`로 시작하는지 확인
- Resend 대시보드에서 키가 활성화되었는지 확인
- 키를 재생성해보기

### "Domain not verified" 오류
- 테스트용: `FROM_EMAIL=onboarding@resend.dev` 사용
- 프로덕션: 도메인 인증 완료 후 사용

### 이메일이 스팸함에 가는 경우
- 자체 도메인 사용 + SPF/DKIM 설정 필요
- Gmail/Outlook은 테스트 도메인을 스팸으로 분류할 수 있음

---

## 📞 도움이 필요하시면

1. Resend 대시보드에서 로그 확인
2. `pm2 logs kvan-checklist --nostream` 로그 확인
3. 구체적인 오류 메시지 공유

---

**다음 단계**: API 키 설정 후 본인 이메일로 테스트해보세요! 🚀
