const ajax = new XMLHttpRequest();
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json';
const container = document.getElementById('root');

const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
const content = document.createElement('div');

ajax.open('GET', TITLE_URL, false);
ajax.send();
const newsList = JSON.parse(ajax.response);

const ul = document.createElement('ul');

window.addEventListener('hashchange', () => {
  const id = location.hash.substring(1);
  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();

  const ncontent = JSON.parse(ajax.response);
  const title = document.createElement('h1');
  title.innerHTML = ncontent.title;
  content.appendChild(title);
});

for (let i = 0; i < 5; i++) {
  const li = document.createElement('li'); // <li> 태그가 생성
  const a = document.createElement('a'); // <a> 태그가 생성
  a.href = `#${newsList[i].id}`;
  a.innerHTML = `${newsList[i].title}(❤️${newsList[i].comments_count})`;
  li.appendChild(a); // <li><a>
  ul.appendChild(li); // <ul><li>
}
container.appendChild(ul);
container.appendChild(content);

document.getElementById('root').appendChild(ul);
