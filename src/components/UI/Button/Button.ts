import "./Button.scss";
interface IConstructor {
  type?: string;
  text: string;
  styling?: string;
}

class Button {
  button: HTMLButtonElement;

  constructor({ type = "button", text, styling }: IConstructor) {
    this.button = document.createElement("button");

    this.button.className = styling ? `Button ${styling}` : "Button";
    this.button.type = type;
    this.button.textContent = text;

    return this.button as any;
  }
}

export default Button;
