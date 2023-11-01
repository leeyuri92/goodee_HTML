// XMLHttpRequest는 브라우저가 제공하는 비동기통신객체
// 이 객체를 생성하면 open(), send() 호출 가능 

const ajax = new XMLHttpRequest(); // 브라우저가 비동기처리를 위해 제공하는 내장객체임
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const container = document.getElementById('root');

// 뉴스 comment를 담을 태그 생성
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const content = document.createElement('div');

// open은 XMLHttpRequest 객체가 제공하는 함수로 파라미터는 3개가 필요함
// ajax변수는 XMLHttpRequest를 참조하는 변수명임
ajax.open('GET', TITLE_URL, false);   // (전송방식, 요청하는 URL, true:동기/false:비동기) 처리로 요청해줌
ajax.send(); // 호출시 바로 서버측 요청발생
// 서버측의 응답을 받아오는 속성이 response

const newsList = JSON.parse(ajax.response); //위 요청을 서버에서 받아오는 속성 response
console.log(newsList); // 서버측에서 보낸 응답 출력해보기 - Array로 변화 출력

const ul = document.createElement('ul'); // DOM API 가지고 태그를 만드니까 직관적이지 않다. DOM Tree 그려지지 않아서

// 해시값이 변경될 때 - 인터셉터 - @id -> Array에 담긴 id값 38012345을 변경한다.
window.addEventListener('hashchange', () => {
  console.log('해시가 변경되었다.');
  console.log(location.hash);   // #38019991 -> #38019991.substring(0) -> #3019991
  const id = location.hash.substring(1);
  console.log(id);
  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();

  const ncontent = JSON.parse(ajax.response);
  const title = document.createElement('h1'); // 파라미터에 변수를 사용하면 대응하는 객체는 따로 존재함
  title.innerHTML = ncontent.title;
  content.appendChild(title);
  console.log(ncontent);
});

for (let i = 0; i < 5; i++) {
  const li = document.createElement('li'); // <li> 태그가 생성
  const a = document.createElement('a'); // <a> 태그가 생성
  a.href = `#${newsList[i].id}`; // <a a href =''> 여기 들어갈 정보가 현재 없다 </a>
  //console.log(newsList[i].title);
  a.innerHTML = `${newsList[i].title}(❤️${newsList[i].comments_count})`; // a태그 내부에 텍스트 노드를 결정해준다.
  li.appendChild(a); // <li><a>
  ul.appendChild(li); // <ul><li>
}

// 기존에 태그에 하위태그로 추가하는 함수
container.appendChild(ul); // <div id='root'><ul>
container.appendChild(content); // 기존에 있는 노드에 추가하기

document.getElementById('root').appendChild(ul);
