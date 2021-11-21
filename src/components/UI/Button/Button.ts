import "./Button.scss";

interface Button {
  button: any;
}

interface Constructor {
  type: string;
  text: string;
  styling?: string;
}

class Button {
  constructor({ type = "button", text, styling }: Constructor) {
    this.button = document.createElement("button");

    this.button.className = styling ? `Button ${styling}` : "Button";
    this.button.type = type;
    this.button.textContent = text;

    return this.button;
  }
}

export default Button;
