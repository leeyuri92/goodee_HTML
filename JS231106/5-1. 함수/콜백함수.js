// 콜백함수 - 실습

const hap = (a,b) => a+b;
const minus = (a,b) => a-b;

// 파라미터자리는 외부에서 결정된다. 
// action - 함수이다 - 외부로 주어지는 함수를 콜백함수라 한다.
function account(a,b,action){
  if(a<0 || b<0){  //  둘 중 하나라도 0보다 작으면 영원히 호출될 수 없다.
    return ;
  }
  let result = action(a,b)
  return result;
}
// 언제 호출될지 모르는 경우도 콜백함수
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는게 아니라 
// 함수를 가리키고 있는 함수의 참조값이 전달된다.
// 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨
console.log(account(1,2,hap));
console.log(account(1,2,minus));