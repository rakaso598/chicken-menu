import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "치킨 메뉴 가이드 - 전국 치킨 브랜드 메뉴와 가격",
  description:
    "BHC, 교촌치킨, BBQ, 굽네치킨 등 전국 치킨 브랜드의 메뉴와 가격을 한눈에 확인하세요. 모바일에서 편리하게 치킨 메뉴를 검색하고 비교할 수 있습니다.",
  keywords:
    "치킨, 메뉴, 가격, BHC, 교촌치킨, BBQ, 굽네치킨, 푸라닭, 노랑통닭, 자담치킨, 60계치킨, 네네치킨, 페리카나, 처갓집, 맘스터치, 또봉이통닭, 컬투치킨, 멕시카나, 호식이두마리치킨, 지코바치킨, 쌀통닭, 치킨마루, 오븐마루치킨",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="치킨 메뉴 가이드" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/icon-192x192.svg" />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="/favicon-32x32.svg"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="16x16"
          href="/favicon-16x16.svg"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
