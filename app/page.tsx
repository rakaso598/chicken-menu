"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import chickenData from "./data/chickenData.json";
import { ChickenData, ChickenBrand } from "./types/chicken";
import BrandCard from "./components/BrandCard";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

export default function Home() {
  const [filteredBrands, setFilteredBrands] = useState<ChickenBrand[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<ChickenBrand | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 데이터 로딩
  useEffect(() => {
    try {
      const data = chickenData as ChickenData;
      setFilteredBrands(data.치킨브랜드);
    } catch (error) {
      console.error("데이터 로딩 중 오류 발생:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 검색 로직 최적화 (useMemo 사용)
  const filteredBrandsMemo = useMemo(() => {
    if (!searchTerm.trim()) {
      return (chickenData as ChickenData).치킨브랜드;
    }

    const searchLower = searchTerm.toLowerCase();
    return (chickenData as ChickenData).치킨브랜드.filter(
      (brand) =>
        brand.브랜드명.toLowerCase().includes(searchLower) ||
        brand.메뉴.some(
          (menu) =>
            menu.이름.toLowerCase().includes(searchLower) ||
            menu.설명.toLowerCase().includes(searchLower)
        )
    );
  }, [searchTerm]);

  // 검색 결과 업데이트
  useEffect(() => {
    setFilteredBrands(filteredBrandsMemo);
  }, [filteredBrandsMemo]);

  // 모달 닫기 핸들러
  const handleCloseModal = useCallback(() => {
    setSelectedBrand(null);
  }, []);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedBrand) {
        handleCloseModal();
      }
    };

    if (selectedBrand) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // 스크롤 방지
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedBrand, handleCloseModal]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">치킨 메뉴를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />

      <main className="container mx-auto px-4 pb-20">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {searchTerm
              ? `"${searchTerm}" 검색 결과 (${filteredBrands.length}개)`
              : `치킨 브랜드 (${filteredBrands.length}개)`}
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {filteredBrands.map((brand, index) => (
              <BrandCard
                key={`${brand.브랜드명}-${index}`}
                brand={brand}
                onSelect={() => setSelectedBrand(brand)}
              />
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-2">
                {searchTerm
                  ? "검색 결과가 없습니다"
                  : "치킨 브랜드 정보를 불러올 수 없습니다"}
              </div>
              <div className="text-gray-400 text-sm">
                {searchTerm
                  ? "다른 키워드로 검색해보세요"
                  : "잠시 후 다시 시도해주세요"}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 브랜드 상세 모달 */}
      {selectedBrand && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white">
              <div className="flex justify-between items-center">
                <h3 id="modal-title" className="text-xl font-bold">
                  {selectedBrand.브랜드명}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="모달 닫기"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <a
                href={selectedBrand.웹사이트}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              >
                공식 웹사이트 방문
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                {selectedBrand.메뉴.map((menu, index) => (
                  <div
                    key={`${menu.이름}-${index}`}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {menu.이름}
                      </h4>
                      <span className="text-orange-600 font-bold text-lg">
                        ₩{parseInt(menu.가격).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {menu.설명}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
