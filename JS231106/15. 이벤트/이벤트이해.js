const a = document.querySelector('a')

// console.dir(a);

// a.onclick = () => {
//   console.log('링크 클릭했다');
// }
// a.onclick = () => {
//   console.log('링크 다시 클릭했다');
// }

a.addEventListener('click',() =>{
  console.log('you click');
})
a.addEventListener('click',() =>{
  console.log('you click again');
})