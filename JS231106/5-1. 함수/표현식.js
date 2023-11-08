// 함수 선언문 function name(){}
// 함수 표현식 const name = function(){} - 익명함수: 외부에서 사용불가(자바 : 익명클래스)

let hap = function(a,b){
  return a+b;
}

hap = (a,b) => a+b; // return 생략할 수 있다. 리액트
console.log(hap(1,2));

// IIFE
(function run(){
  console.log('run');
})();

// 변수에 함수를 할당하여 표현하는 경우 이름을 지어주어도 외부에서 사용이 불가
let hap2 = function sum(a,b){
  return a+b;
}
//console.log(sum(1,2));