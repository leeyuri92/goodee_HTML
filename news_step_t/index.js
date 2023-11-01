//XMLHttpRequest는 브라우저가 제공하는 비동기통신객체이다.
//이 객체를 생성하면 open(), send()호출
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
  const id = location.hash.substring(1); //파라미터에 1을 주어서 #제외시킨다.
  const ncontent = getData(CONTENT_URL.replace('@id', id));
  const title = document.createElement('h1');
  title.innerHTML = ncontent.title;
  //파라미터 자리에 변수가 왔다 - 싱글 쿼테이션은 없다
  //파라미터에 변수를 사용하면 대응하는 객체는 따로 존재함
  //기존에 태그 하위태그로 추가하는 함수 이다.
  content.appendChild(title); //<div><h1>제목{텍스트노드:태그이름은 없고 값은 있다.}</h1></div>
});

for (let i = 0; i < 5; i++) {
  const li = document.createElement('li'); //<li>
  const a = document.createElement('a'); //<a>
  a.href = `#${newsList[i].id}`; //<a href=''>여기 들어갈 정보가 현재 없다.</a>
  //console.log(newsList[i].title);
  //innertHTML을 통해서 a태그 내부에 텍스트노드를 결정해 준다.
  a.innerHTML = `${newsList[i].title}(🚨${newsList[i].comments_count})`;
  li.appendChild(a); //<li><a>
  ul.appendChild(li); //<ul><li>
} //end of for

container.appendChild(ul); //document.getElementById('root').ul-> <div id='root'><ul>
container.appendChild(content); //appendChild는 기존에 있는 노드에 추가하기
