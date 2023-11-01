const ajax = new XMLHttpRequest();
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const container = document.getElementById('root');
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
  const h1 = document.createElement('h1');
  h1.innerHTML = ncontent.title;
  div.appendChild(h1);
});

for(let i =0; i<5 ; i++){
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#${newsList[i].id}`;
  a.innerHTML = `${newsList[i].title}(🍅${newsList[i].comments_count})`;
  li.appendChild(a);
  ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(div);
