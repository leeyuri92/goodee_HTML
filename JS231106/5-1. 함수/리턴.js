// return을 명시적으로 하지 않으면 자동으로 undefined 반환

function hap(a,b){
  return undefined
}

console.log(hap(1,2));

// return을 함수 중간에 만나면 함수가 종료된다.
function m(num){
  // 파라미터에 받은 값에 대한 유효성 체크하는 코드를 추가
  if(num<0){
    return;  
  }
  console.log(num);
  }
  m(5)
  m(-5)