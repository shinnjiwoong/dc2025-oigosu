# 커스텀 폰트 테스터 🎨

OTF 폰트 파일을 업로드하고 다양한 텍스트로 실시간 테스트할 수 있는 웹 애플리케이션입니다.

## ✨ 주요 기능

- 📁 **OTF 폰트 파일 업로드**: 드래그 앤 드롭으로 간편하게 업로드
- 🔍 **실시간 미리보기**: 업로드 즉시 폰트 적용 확인
- 📝 **다양한 테스트 텍스트**: 한글, 영문, 숫자, 특수문자 포함
- 🎛️ **스타일 조정**: 폰트 크기(12-72px), 줄 간격(1.0-3.0) 조정
- 🌙 **다크모드 지원**: 시스템 설정에 따른 자동 테마 전환
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

## 🚀 시작하기

### 개발 환경 실행

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 📋 사용 방법

1. **폰트 업로드**: OTF 파일을 선택하여 업로드
2. **텍스트 입력**: 테스트할 텍스트를 직접 입력하거나 샘플 텍스트 선택
3. **스타일 조정**: 슬라이더를 사용하여 폰트 크기와 줄 간격 조정
4. **비교**: 기본 폰트와 업로드한 폰트를 나란히 비교

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel
- **Font Loading**: CSS Font Loading API

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css      # 전역 스타일 및 폰트 설정
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 메인 폰트 테스터 페이지
├── components/          # 재사용 가능한 컴포넌트
└── ...
public/
└── fonts/              # 폰트 파일 저장소
```

## 🌐 배포

### Vercel 배포

1. Vercel 계정에 로그인
2. 이 리포지토리를 연결
3. 자동 배포 완료

또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

## 📝 지원 폰트 형식

- ✅ OTF (OpenType Font)
- ❌ TTF (향후 지원 예정)
- ❌ WOFF/WOFF2 (향후 지원 예정)

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 CSS 프레임워크
- [Vercel](https://vercel.com/) - 배포 플랫폼
