// ES5 시절 호이스팅 이슈를 어떻게 피해갔을까?
// 해결방법 - 즉시실행함수
// 다른방법으로는 즉시실행함수를 사용해서
// 괄호로 가두고 파라미터로는 i를 받지만 가두어진 파라미터자리에는 index변수를 사용해서
// 호이스팅이 발동하는 변수i값이 아니라 오염되지 않는 index를 사용함으로써 문제를 해결
// ({})();
/*
(function(x){

})(0);
*/

const btns = document.querySelectorAll("ul li" );

for(var i =0 ;i<btns.length;i++){
  ((index) => {
    btns[index].addEventListener('click',(event) => {
      console.log(index);
  })
  })(i);
}