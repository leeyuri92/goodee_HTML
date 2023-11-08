// 모든업무에는 순서가 있다.

// 콜백함수 - 함수에 파라미터 자리에 들어가는 함수 : prototype
// 용도 - 반드시 순서가 지켜져야 하는 경우에 사용하자.
first = (Param) => {
  console.log('1');
  Param()
}

second = () => {
  console.log('2');
}
first(second)