import "./Select.scss";

class Select {
  select: HTMLSelectElement;
  constructor() {
    this.select = document.createElement("select");

    this.select.className = "Select";

    this.select.innerHTML = `
      <option value="curr" hidden disabled selected>Currency</option>
      <option value="data">data currencies</option>
      <option value="data">data currencies</option>
      <option value="data">data currencies</option>  
    `;

    return this.select as any;
  }
}

export default Select;
