import Button from "../UI/Button/Button";
import "./Pagination.scss";

interface Pagination {
  pagination: any;
}

class Pagination {
  constructor() {
    this.pagination = document.createElement("div");

    this.pagination.className = "Pagination";

    this.pagination.append(new Button({ text: "<<" }), new Button({ text: ">>" }));

    return this.pagination;
  }
}

export default Pagination;


