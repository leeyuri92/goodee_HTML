// Default parameters
// 기본값 함수 매개변수 참고링크
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters

const msgPrint = (msg = 'default message') => {
   console.log(msg);
}

msgPrint('hello');
msgPrint();