// fetch함수는 BOM이라서 REPL실행이 불가하다




//console.log(fetch("http://www.omdbapi.com/?apikey=8457acd2&s=frozen"));

const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve()
    },1000)
  })
}

const b = () => console.log(2);

a().then(()=>b())
// b().then(()=>a())