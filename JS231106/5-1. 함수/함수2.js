// 자스에서 함수는 객체이다.
// 원시형은 부르면 값이 나온다 
// 참조형은 부르면 주소번지(heap)가 나온다.  - 사이즈를 정할 수 없다.
add = (a,b) => {
  return a+b;
}
console.log(add);  // 주소번지
console.log(add(1,2));  // 값

// hap변수가 add의 주소번지와 같은 값을 가리키게 된다.
// 함수의 이름은 함수를 참조하고 있다 
// 그러니까 함수도 객체이다 - 콜백함수 중요한 컨벤션
const hap = add ;
console.log(hap == add);  //   값이 같니?(주소번지가 같니?)
console.log(hap === add); // 타입이 같니?(펑션=평션)
console.log(typeof hap);
console.log(typeof add);
console.log(hap);

// 자스에서는 파라미터가 달라도 이름이 같으면 호출이 가능
// 같은 이름의 함수를 가질 수 없다 - 오버로딩 없음
console.log(hap());

console.log(hap(1,2));
console.log(hap(1));
console.log(hap(1,null));
console.log(hap(1,undefined));
console.log(hap(1,{}));
console.log(hap(1,[]));


hap1=()=>{
  return undefined;
}

console.log(hap1);