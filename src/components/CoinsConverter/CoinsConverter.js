import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import "./CoinsConverter.scss";

class CoinsConverter {
  constructor() {
    this.coinsConverter = document.createElement("form");

    this.coinsConverter.className = "CoinsConverter";

    this.coinsConverter.append(
      new Input({ type: "number", placeholder: "$ 1" }),
      new Select,
      new Select,
    );

    return this.coinsConverter;
  }
}

export default CoinsConverter;
