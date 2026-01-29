# Cloudflare Pages 배포 설정

## ✅ Build Configuration

Cloudflare Pages 대시보드에서 다음과 같이 설정하세요:

### Framework preset
```
None
```

### Build command
```
npm run build
```

### Build output directory
```
dist
```

### Root directory (path)
```
/
```

### Environment variables (Production)
```
RESEND_API_KEY = re_Up1HqmVJ_5Bd5tX4Vb818kfEkqpAGbQzR
FROM_EMAIL = onboarding@resend.dev
FROM_NAME = 케이밴 경북지사
```

## ⚠️ 중요: Deploy command

**Deploy command는 비워두세요!**

Cloudflare Pages는 빌드가 완료되면 자동으로 배포합니다.
별도의 deploy command를 실행하면 오류가 발생할 수 있습니다.

## 🔄 자동 배포

GitHub의 main 브랜치에 push하면 자동으로:
1. 빌드 시작
2. npm install 실행
3. npm run build 실행
4. dist 폴더를 Cloudflare Pages에 배포

## 📝 Node.js 버전

프로젝트는 Node.js 18을 사용합니다. (.nvmrc 파일 참조)
