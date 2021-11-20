import "./App.scss";
import CoinsConverter from "./components/CoinsConverter/CoinsConverter";
import DataCoins from './components/DataCoins/DataCoins';

class App {
  constructor() {
    this.app = document.createElement("div");

    this.app.className = "App";

    this.app.append(new DataCoins, new CoinsConverter);

    return this.app;
  }
}

export default App;
