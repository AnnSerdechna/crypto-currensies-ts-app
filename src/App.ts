import "./App.scss";
import CoinsConverter from "./components/CoinsConverter/CoinsConverter";
import DataCoins from './components/DataCoins/DataCoins';

interface App {
  app: any;
}

class App {
  constructor() {
    this.app = document.createElement("div");

    this.app.className = "App";

    this.app.append(new DataCoins, new CoinsConverter);

    console.log('[typeof this.app]', typeof this.app);
    

    return this.app;
  }
}

export default App;
