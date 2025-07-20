import { useMemo } from "react";
import { ChickenBrand } from "../types/chicken";

interface BrandCardProps {
  brand: ChickenBrand;
  onSelect: () => void;
}

export default function BrandCard({ brand, onSelect }: BrandCardProps) {
  // 가격 계산 최적화
  const { minPrice, maxPrice } = useMemo(() => {
    const prices = brand.메뉴.map((menu) => parseInt(menu.가격));
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, [brand.메뉴]);

  // 메뉴 미리보기 최적화
  const previewMenus = useMemo(() => {
    return brand.메뉴.slice(0, 3);
  }, [brand.메뉴]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <div
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${brand.브랜드명} 메뉴 보기`}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {brand.브랜드명}
          </h3>
          <p className="text-gray-500 text-sm">{brand.메뉴.length}개 메뉴</p>
        </div>
        <div className="text-right">
          <div className="text-orange-600 font-bold text-lg">
            ₩{minPrice.toLocaleString()}
          </div>
          {minPrice !== maxPrice && (
            <div className="text-gray-400 text-sm">
              ~ ₩{maxPrice.toLocaleString()}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {previewMenus.map((menu, index) => (
          <div
            key={`${menu.이름}-${index}`}
            className="flex justify-between items-center text-sm"
          >
            <span
              className="text-gray-700 truncate flex-1 mr-2"
              title={menu.이름}
            >
              {menu.이름}
            </span>
            <span className="text-orange-600 font-semibold whitespace-nowrap">
              ₩{parseInt(menu.가격).toLocaleString()}
            </span>
          </div>
        ))}
        {brand.메뉴.length > 3 && (
          <div className="text-gray-400 text-sm">
            +{brand.메뉴.length - 3}개 더 보기
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <a
          href={brand.웹사이트}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-orange-600 text-sm hover:underline flex items-center focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1 py-1"
          aria-label={`${brand.브랜드명} 공식 웹사이트 방문`}
        >
          공식 웹사이트
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <span className="text-orange-600 text-sm font-semibold">
          메뉴 보기 →
        </span>
      </div>
    </div>
  );
}
