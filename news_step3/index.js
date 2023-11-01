const ajax = new XMLHttpRequest(); // 브라우저가 비동기처리를 위해 제공하는 내장객체임
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const container = document.getElementById('root');

// 뉴스 comment를 담을 태그 생성
const content = document.createElement('div');
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

// @param : url - TITLE_URL or CONTENT_URL
// @return : Array(JSON->application/json -vkdlTjs, c#,spring 사용자들과의 호환)

getData = (url) => {
  ajax.open('GET', url, false);
  ajax.send(); //send()호출될 때 비로서 서버측에 요청이 일어남
  return JSON.parse(ajax.response);
};
const newsList = getData(TITLE_URL);

// open은 XMLHttpRequest 객체가 제공하는 함수로 파라미터는 3개가 필요함
// 1.전송방식 2. 요청하는 URL, 3. true:동기, false:비동기 처리로 요청해줌
// ajax변수는 XMLHttpRequest를 참조하는 변수명임

console.log(newsList); // 서버측에서 보낸 응답 출력해보기 - Array로 변화 출력

const ul = document.createElement('ul'); // <ul>이 만들어 진다. DOM API 가지고 태그를 만드니까 직관적이지 않다. DOM Tree 그려지지 않아서

// 해시값이 변경될 때 - 인터셉터 - @id -> Array에 담긴 id값 38012345을 변경한다.
window.addEventListener('hashchange', () => {
  console.log('해시가 변경되었다.');
  const id = location.hash.substring(1);

  const ncontent = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1');
  title.innerHTML = ncontent.title;
  content.appendChild(title);  // <div><h1></h1></div>
});

for (let i = 0; i < 5; i++) {
  const div = document.createElement('div');
  div.innerHTML = `  
  <li>
    <a href="#${newsList[i].id}">
      ${newsList[i].title}(❤️${newsList[i].comments_count})
    </a>
  </li>
`;
  ul.appendChild(div.firstElementChild);
}
// 기존에 태그에 하위태그로 추가하는 함수
container.appendChild(ul);
container.appendChild(content);
