import "./App.scss";
import CoinsConverter from "./components/CoinsConverter/CoinsConverter";
import DataCoins from "./components/DataCoins/DataCoins";

class App {
  app: HTMLDivElement;

  constructor() {
    this.app = document.createElement("div");

    this.app.className = "App";

    (<any>this.app).append(new DataCoins(), new CoinsConverter());

    return this.app as any;
  }
}

export default App;
