import axios from "axios";
import millify from "millify";
import { ICoin, IData } from "../../types/data";
import CoinsTable from "../CoinsTable/CoinsTable";
import "./DataCoins.scss";

interface IDataCoins {
  className: string;
}

class DataCoins {
  dataCoins: IDataCoins;

  constructor() {
    this.dataCoins = document.createElement("div");

    console.log("[this.dataCoins]", this.dataCoins);

    this.dataCoins.className = "DataCoins";

    DataCoins.render();
    // FIXME
    return this.dataCoins as any;
  }

  static render() {
    const fetchData = () => {
      axios
        .get(
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD",
        )
        .then((res) => {
          const data = res.data.Data;

          const coins = data.map((coin: IData) => {
            const obj: ICoin = {
              name: coin.CoinInfo.Name,
              fullName: coin.CoinInfo.FullName,
              imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
              price: coin.RAW.USD.PRICE,
              change24h: +coin.DISPLAY.USD.CHANGEPCT24HOUR,
              volume24Hour: millify(coin.RAW.USD.VOLUME24HOUR),
              icon: coin.DISPLAY.USD.FROMSYMBOL,
            };
            return obj;
          });

          const dataComponent = document.querySelector(".DataCoins");

          let where;

          let dataList = new CoinsTable(coins);

          if (dataComponent) {
            where = dataComponent;

            where.innerHTML = "";
          } else {
            where = location;
          }

          (<any>where).append(dataList);
        });
    };
    fetchData();
  }
}

export default DataCoins;
