// 함수는 하나의 데이터이다
const getNumber = () => {
  return 123;
}
const getNumber2 =() =>{
  return 5;
}

console.log(typeof getNumber);
console.log(typeof getNumber()); // 호출해서 값의 타입이 나옴
console.log(typeof getNumber2()); // 호출해서 값의 타입이 나옴