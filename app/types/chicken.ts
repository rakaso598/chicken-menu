export interface MenuItem {
  이름: string;
  가격: string;
  설명: string;
}

export interface ChickenBrand {
  브랜드명: string;
  웹사이트: string;
  메뉴: MenuItem[];
}

export interface ChickenData {
  치킨브랜드: ChickenBrand[];
}
