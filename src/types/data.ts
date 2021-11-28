export interface ICoin {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  change24h: number;
  volume24Hour: any;
  icon: string;
}

export interface IData {
  CoinInfo: ICoinInfo;
  RAW: IRAW;
  DISPLAY: IDISPLAY;
}
export interface ICoinInfo {
  Name: string;
  FullName: string;
  ImageUrl: string;
}
interface IRAW {
  USD: IUSD;
}
interface IDISPLAY {
  USD: IUSD; 
}
export interface IUSD {
  PRICE: number;
  CHANGEPCT24HOUR: number;
  VOLUME24HOUR: any;
  FROMSYMBOL: string;
}