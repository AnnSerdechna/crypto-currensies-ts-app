import './Input.scss';

interface Input {
    input: any;
  }
  
  interface Constructor {
    type: string;
    placeholder: string;
    name?: string;
  }

class Input {
    constructor({ type = 'text', placeholder, name }: Constructor) {
        this.input = document.createElement('input');

        this.input.className = 'Input';
        this.input.type = type;

        if (name) {
            this.input.name = name;
        }

        if (placeholder) {
            this.input.placeholder = placeholder;
        }

        return this.input;
    }
}

export default Input;