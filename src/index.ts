import "./styles/style.scss";

const btn: any = document.querySelector(".button");
const section: any = document.querySelector(".section");

let count = 0;

btn.addEventListener("click", () => {
  section.innerHTML = `
    <p>${count++}</p>
  `
})

const myAge: number = 33;

console.log('[myAge]', myAge);

const obj = {
  one: {
    two: {
      three: 'woof'
    }
  }
};

function woof(noise: any) {
  console.log('[noise]', noise && noise.one && noise.one.two.three);

  console.log(noise?.one?.two?.three);
  
}

woof(obj);
