// null : 값이 존재하지 않는다.
let age = null;
console.log(age);

// 시간관리 - 타임라인을 변경할 때 사용
setTimeout(function(){ //  시간을 입력한 값만큼 지연시킨 다음 출력
  age = 80; 
  console.log(age);
}, 1000)   // 1000 = 1초