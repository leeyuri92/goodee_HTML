// ES5 - var -> 호이스팅이슈
// ES6 - let을 사용하면 호이스팅 이슈 피할 수 있다.



//  let대신에 var를 사용하면 0,1,2까지 간 다음 마지막에 3이 전역에 등록되면서 
// 0번째 버튼 1번째 버튼 2번째 버튼에도 3이 출력





const btns = document.querySelectorAll("ul li" );
console.log(typeof btns);  // Array
console.log(btns.length);  // 0

for(var i =0 ;i<btns.length;i++){
  ((index) => {
    btns[index].addEventListener('click',(event) => {
      console.log(index);
  })
  })(i);
}