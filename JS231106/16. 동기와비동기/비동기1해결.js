// cback은 선언안되있어도 사용가능
// 함수도 호이스팅이다
const hap = (a,b,cback)=>{
  setTimeout(()=>{
    cback(a+b);
    console.log(`hap : ${cback(a+b)}`);
  },2000)
}
// 함수 hap 세번째 인자에 들어갈 콜백함수 선언
const first = (x) => {
  console.log(`first x : ${x}`);
  return x+1;
}

const x = hap(1,2,first)
console.log(`x : ${x}`);
const y = x;
console.log(`y : ${y}`);
