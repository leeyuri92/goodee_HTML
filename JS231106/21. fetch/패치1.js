var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK eead243643c8e51d68e243c70e5b0823");
// 사용자가 입력한 정보를 담는 객체 - 필요없다.
// var formdata = new FormData();
// body속성을 통해서 서버측에 먼가 넘겨줘야 원하는 정보를 받아 올 수 있다.(카카오페이, 토스증권 결제서비스)
// body속성을 사용해서 값을 전달할 때는 GET방식불가 - POST로 해야함
// body속성에 넘기는 정보는 반드시 문자열로 한다.
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body : JSON.stringify({
    name : '나신입',
    email : 'nice@hot.com'
  }),
  redirect: 'follow'
};

fetch("https://dapi.kakao.com/v3/search/book.json?target=title&query=자바&size=3", requestOptions)
  .then(response => response.json())             // then이 반환하는건 promise
  .then(result => console.log(result))           // promise 제공하는 함수나 속성을 호출 할 수 있다.
  .catch(error => console.log('error', error));  // 에러시 실행