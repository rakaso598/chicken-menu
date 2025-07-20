export default function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">🍗 치킨 메뉴 가이드</h1>
            <p className="text-orange-100 text-sm">
              전국 치킨 브랜드 메뉴와 가격을 한눈에!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
