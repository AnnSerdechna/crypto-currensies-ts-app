import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import "./CoinsConverter.scss";

class CoinsConverter {
  coinsConverter: HTMLFormElement;
  constructor() {
    this.coinsConverter = document.createElement("form");

    this.coinsConverter.className = "CoinsConverter";

    (<any>this.coinsConverter).append(
      new Input({ type: "number", placeholder: "$ 1" }),
      new Select,
      new Select,
    );

    return this.coinsConverter as any;
  }
}

export default CoinsConverter;
