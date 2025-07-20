# 🍗 [치킨 메뉴 가이드](https://chicken-menu.vercel.app)

<img width="1081" height="842" alt="image" src="https://github.com/user-attachments/assets/69d92475-6b73-4418-8ff6-4f7b2ce8a211" />

전국 치킨 브랜드의 메뉴와 가격을 한눈에 확인할 수 있는 모바일 퍼스트 웹 애플리케이션입니다.

## ✨ 주요 기능

- **전국 치킨 브랜드 정보**: BHC, 교촌치킨, BBQ, 굽네치킨 등 20개 브랜드
- **실시간 검색**: 브랜드명, 메뉴명, 설명으로 검색 가능
- **상세 메뉴 정보**: 각 브랜드의 메뉴, 가격, 설명 제공
- **공식 웹사이트 링크**: 각 브랜드의 공식 웹사이트로 바로 이동
- **모바일 최적화**: 모바일에서 편리하게 사용할 수 있도록 설계
- **PWA 지원**: 홈 화면에 추가하여 앱처럼 사용 가능
- **접근성 지원**: 키보드 네비게이션 및 스크린 리더 지원

## 🚀 기술 스택

- **Framework**: Next.js 15.4.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Deployment**: Vercel
- **Performance**: React 19, Turbopack

## 📱 모바일 퍼스트 디자인

- 반응형 디자인으로 모든 모바일 기기에서 최적화
- 터치 친화적인 UI/UX (44px 최소 터치 영역)
- 빠른 로딩 속도 및 성능 최적화
- PWA 기능으로 앱처럼 사용 가능
- 스티키 검색바로 편리한 검색 경험

## 🎯 성능 최적화

- **메모이제이션**: useMemo와 useCallback으로 불필요한 재계산 방지
- **렌더링 최적화**: React key 최적화 및 컴포넌트 분리
- **번들 최적화**: Turbopack을 통한 빠른 개발 환경
- **이미지 최적화**: SVG 아이콘으로 가벼운 로딩

## ♿ 접근성 (Accessibility)

- **키보드 네비게이션**: Tab, Enter, Space, Escape 키 지원
- **스크린 리더**: ARIA 라벨 및 시맨틱 HTML 구조
- **포커스 관리**: 명확한 포커스 표시 및 링
- **색상 대비**: WCAG 가이드라인 준수

## 🏃‍♂️ 시작하기

### 개발 환경 설정

```bash
# 저장소 클론
git clone <repository-url>
cd chicken-menu

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 환경 변수

이 프로젝트는 외부 API나 데이터베이스 없이 JSON 데이터를 사용하므로 별도의 환경 변수 설정이 필요하지 않습니다.

## 📊 데이터 구조

프로젝트 내 `app/data/chickenData.json` 파일에 치킨 브랜드 정보가 저장되어 있습니다:

```json
{
  "치킨브랜드": [
    {
      "브랜드명": "BHC",
      "웹사이트": "http://www.bhc.co.kr/",
      "메뉴": [
        {
          "이름": "뿌링클",
          "가격": "21000",
          "설명": "세상에 없던 마법의 맛 뿌링클"
        }
      ]
    }
  ]
}
```

## 🎨 컴포넌트 구조

```
app/
├── components/
│   ├── Header.tsx          # 헤더 컴포넌트
│   ├── SearchBar.tsx       # 검색바 컴포넌트 (ESC 키 지원)
│   └── BrandCard.tsx       # 브랜드 카드 컴포넌트 (키보드 네비게이션)
├── data/
│   └── chickenData.json    # 치킨 데이터 (20개 브랜드)
├── types/
│   └── chicken.ts          # TypeScript 타입 정의
├── globals.css             # 전역 스타일 (모바일 최적화)
├── layout.tsx              # 레이아웃 (PWA 메타데이터)
└── page.tsx                # 메인 페이지 (성능 최적화)
```

## 🔧 주요 개선사항

### 성능 최적화

- ✅ useMemo로 검색 로직 최적화
- ✅ useCallback으로 이벤트 핸들러 메모이제이션
- ✅ React key 최적화로 렌더링 성능 향상
- ✅ 불필요한 리렌더링 방지

### 접근성 개선

- ✅ 키보드 네비게이션 지원 (Tab, Enter, Space, Escape)
- ✅ ARIA 라벨 및 시맨틱 HTML 구조
- ✅ 스크린 리더 호환성
- ✅ 포커스 관리 개선

### 사용자 경험

- ✅ 로딩 상태 표시
- ✅ 검색 결과 카운트
- ✅ ESC 키로 검색창/모달 닫기
- ✅ 모달 열린 상태에서 배경 스크롤 방지
- ✅ 부드러운 전환 애니메이션

### 에러 처리

- ✅ 데이터 로딩 에러 처리
- ✅ 빈 상태와 에러 상태 구분
- ✅ 타입 안전성 보장

## 🌐 배포

이 프로젝트는 Vercel에 최적화되어 있습니다:

1. GitHub에 코드를 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 완료

### PWA 기능

- 홈 화면에 앱처럼 설치 가능
- 오프라인 지원 준비
- 앱 아이콘 및 스플래시 스크린

## 📱 지원 브라우저

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🧪 테스트

```bash
# 린트 검사
npm run lint

# 타입 체크
npx tsc --noEmit
```

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 기여 가이드라인

- TypeScript 사용
- 접근성 고려
- 성능 최적화
- 모바일 퍼스트 디자인

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

## 🎉 업데이트 로그

### v1.1.0 (최신)

- 성능 최적화 (useMemo, useCallback)
- 접근성 개선 (키보드 네비게이션, ARIA)
- 사용자 경험 향상 (로딩 상태, ESC 키 지원)
- 에러 처리 강화

### v1.0.0

- 초기 릴리즈
- 기본 치킨 메뉴 가이드 기능
- 모바일 퍼스트 디자인
- PWA 지원
