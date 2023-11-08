// 파라미터, 개매변수, 인자
// 파라미터의 기본값은 undefined
// 파라미터의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
function hap(a,b){
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[2]);
  return a+b + arguments[1];
}

hap(1,2,3);
console.log(hap(3,2,3));
hap(1,2,null);

// ES6 - Parcel,  Webpack
// 매개변수 기본값을 줄 수 있다.

// 타입스크립트
function hap3(a=2, b=3){
  return a+b
}

// 호출 시 파라미터 주지 않아도 초기값으로 연산이 처리된다.
console.log(hap3());

// Rest Parameter
function sum(... numbers){
  console.log(numbers);
}
sum(1,3,5,7,9)

function sum2(x,y, ... numbers){
  console.log(x);
  console.log(y);
  console.log(numbers); 
}
sum2(1,3,5,7,9)