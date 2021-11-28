import Button from "../UI/Button/Button";
import "./Pagination.scss";

class Pagination {
  pagination: HTMLDivElement;

  constructor() {
    this.pagination = document.createElement("div");

    this.pagination.className = "Pagination";

    (<any>this.pagination).append(
      new Button({ text: "<<" }),
      new Button({ text: ">>" }),
    );

    return this.pagination as any;
  }
}

export default Pagination;
