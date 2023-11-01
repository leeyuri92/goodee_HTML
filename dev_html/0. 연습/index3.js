const ajax = new XMLHttpRequest();
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const root = document.getElementById('root');
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

getData = (url) => {
  ajax.open('GET', url, false);
  ajax.send();
  return JSON.parse(ajax.response);
};

// 뉴스목록을 가져오는 함수
getNewsTitle = () => {
  const newsTitle = getData(TITLE_URL);
  const newsList = [];
  newsList.push('<ul>');
  for(let i =0; i<10 ; i++){
    newsList.push(`
    <li>
      <a href="#${newsTitle[i].id}">
        ${newsTitle[i].title}(${newsTitle[i].comments_count})
      </a>
    </li>
    `);
  };
  newsList.push('</ul>');
  root.innerHTML = newsList.join("");
};

// 뉴스 상세페이지 가져오는 함수
newsDetail = ()=>{
  const id = location.hash.substring(1);
  const ncontent = getData(CONTENT_URL.replace('@id',id));
  root.innerHTML = `  
  <h1>${ncontent.title}</h1>
  <div><a href="#"> 목록으로 </a> </div>`;
};

// 라우터
router = () => {
  const routerPath = location.hash;
  if(routerPath===''){
    getNewsTitle();
  } else {
    newsDetail();
  }
};


window.addEventListener('hashchange',router);
router();