const ajax = new XMLHttpRequest();
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const root = document.getElementById('root');
const div = document.createElement('div');
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

getData = (url) => {
  ajax.open('GET', url, false);
  ajax.send();
  return JSON.parse(ajax.response);
};

const newsList = getData(TITLE_URL);
const ul = document.createElement('ul');

addEventListener('hashchange', (event)=>{
  const id = location.hash.substring(1);
  const ncontent = getData(CONTENT_URL.replace('@id',id));

  root.innerHTML = `  
  <h1>${ncontent.title}</h1>
  <div><a href="#"> 목록으로 </a> </div>`
});

const newsPage=[];
newsPage.push('<ul>');
for(let i =0; i<10 ; i++){
  newsPage.push(`
  <li>
  <a href="#${newsList[i].id}">
  ${newsList[i].title}(${newsList[i].comments_count})
  </a>
  </li>
  `);
}
newsPage.push('</ul>');
root.innerHTML = newsPage.join("");

root.appendChild(ul);
root.appendChild(div);