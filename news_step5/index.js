// 전체적인 구조를 바꿔보기
// createElement, appendChild 가능한 다 걷어낸다.

const ajax = new XMLHttpRequest(); //브라우저가 비동기처리를 위해 제공하는 내장객체임
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const container = document.getElementById('root');
const content = document.createElement('div');
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

//@param : url - TITLE_URL or CONTENT_URL
//@return : Array(JSON-> application/json- 파이썬, c#, Spring)
getData = (url) => {
  ajax.open('GET', url, false);
  ajax.send(); //send()호출될 때 비로서 서버측에 요청이 일어남
  return JSON.parse(ajax.response); //JSON->  Array
};

const newsList = getData(TITLE_URL);
//서버측에서 보낸 응답을 출력해 보기 -Array로 변환하여 출력해줌
//DOM  API가지고 태그를 만드니까 직관적이지 않다. DOM Tree그려지지 않아서.
const ul = document.createElement('ul'); //생성할 태그이름을 정함
//해시값이 변경될 때 - 인터셉트 - @id ->  Array에 담긴 id값 38012345 변경함
addEventListener('hashchange', (event) => {
  const id = location.hash.substring(1); //파라미터에 1을 주어서 #제외시킨다.(2번째 자리부터 끝까지)
  const ncontent = getData(CONTENT_URL.replace('@id', id));
  
  container.innerHTML = `
  <h1>${ncontent.title}</h1>
  <div><a href ="#"> 목록으로 </a></div>`
});
// 배열선언하기 - 뉴스목록을 배열에 담아서 한번에 root안에 집어넣어준다.
// append 추가하지말고 새로고침 된것처럼 덮어쓴다
const newsPage = [];                // 배열선언
newsPage.push('<ul>');              // 문자열 <ul> 삽입 - 직관적
for (let i = 0; i < 5; i++) {
  newsPage.push(`
  <li>
    <a href="#${newsList[i].id}">
      ${newsList[i].title}(${newsList[i].comments_count})
    </a>
  </li>
  `);  
} //end of for
newsPage.push('</ul>');
container.innerHTML = newsPage.join(""); 

/*
  두 배열을 하나로 합쳐 문자열로 출력하는 함수가 join
*/
container.appendChild(ul); //document.getElementById('root').ul-> <div id='root'><ul>
container.appendChild(content); //appendChild는 기존에 있는 노드에 추가하기
