// 전체적인 구조를 바꿔보기
// createElement, appendChild 가능한 다 걷어낸다.

const ajax = new XMLHttpRequest(); //브라우저가 비동기처리를 위해 제공하는 내장객체임
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const container = document.getElementById('root');
const content = document.createElement('div');
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

// 페이징처리를 위해 필요한 상태값을 관리하는 객체(VO느낌)
// store 리엑트에서 사용하는 키워드 - 상태관리
const store = {
  currentPage: 1,
  totalRecord: 47,
};

getData = (url) => {
  ajax.open('GET', url, false);
  ajax.send(); //send()호출될 때 비로서 서버측에 요청이 일어남
  return JSON.parse(ajax.response); //JSON->  Array
};

//const newsList = getData(TITLE_URL);
//const newsPage = [];                // 배열선언

// 뉴스목록을 가져오는 함수 구현
// 글 내용을 보려면 글목록 화면에서 제목을 클릭했을 때 (a태그가 발동되었을때)
// 상세페이지로 이동한다.
getNewsData = () => {
  const newsData = getData(TITLE_URL);
  const newsPage = [];
  newsPage.push('<ul>'); // 문자열 <ul> 삽입 - 직관적
  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    newsPage.push(`
    <li>
      <a href="#/show/${newsData[i].id}">
        ${newsData[i].title}(❤️${newsData[i].comments_count})
      </a>
    </li>
  `);
  } //end of for
  newsPage.push('</ul>');
  newsPage.push(`
    <div>
      <a href="#/page/${
        store.currentPage > 1 ? store.currentPage - 1 : 1
      }"> 이전 페이지 </a>
      <a href="#/page/${
        store.currentPage < 3 ? store.currentPage + 1 : 3
      }"> 다음 페이지 </a>
    </div>
  `);
  container.innerHTML = newsPage.join('');
};

// 뉴스 상세보기 함수 구현
newsDetail = () => {
  const id = location.hash.substring(7);
  console.log(id);
  const ncontent = getData(CONTENT_URL.replace('@id', id));
  container.innerHTML = `
    <h1>${ncontent.title}</h1>
    <div>
      <a href ="#/page/${store.currentPage}"> 목록으로 </a>
    </div>`;
};

// 라우터 함수 구현
router = () => {
  // 실제로 목록을 누르면 #을 갖는데
  // location.hash에 #만 있으면 빈값을 반환함

  const routerPath = location.hash;
  if (routerPath === '') {
    //==두개면 값만 비교하는데 세개면 타입까지도 비교함
    getNewsData();
  } else if (routerPath.indexOf('#/page/') >= 0) {
    store.currentPage = Number(routerPath.substring(7)); // 전역변수의 값을 변경
    getNewsData(); // 글내용보기
  } else {
    newsDetail();
  }
};

window.addEventListener('hashchange', router);
router();

// 함수도 객체다 , 주소번지를 가지고있다.==>()를 따로 안써도 된다.

//서버측에서 보낸 응답을 출력해 보기 -Array로 변환하여 출력해줌
//DOM  API가지고 태그를 만드니까 직관적이지 않다. DOM Tree그려지지 않아서.
// 배열선언하기 - 뉴스목록을 배열에 담아서 한번에 root안에 집어넣어준다.
// append 추가하지말고 새로고침 된것처럼 덮어쓴다
