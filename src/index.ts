const myAge: number = 33;

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

woof(null);
