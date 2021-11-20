import Input from "../UI/Input/Input";
import "./CoinsConverter.scss";

class CoinsConverter {
  constructor() {
    this.coinsConverter = document.createElement("div");

    this.coinsConverter.className = "CoinsConverter";

    this.coinsConverter.append(new Input({ placeholder: 'Search...' }));

    return this.coinsConverter;
  }
}

export default CoinsConverter;