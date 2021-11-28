import "./Input.scss";

interface Constructor {
  type?: string;
  placeholder?: string;
  name?: string;
}

class Input {
  input: HTMLInputElement;

  constructor({ type = "text", placeholder, name }: Constructor) {
    this.input = document.createElement("input");

    this.input.className = "Input";
    this.input.type = type;

    if (name) {
      this.input.name = name;
    }

    if (placeholder) {
      this.input.placeholder = placeholder;
    }

    return this.input as any;
  }
}

export default Input;
