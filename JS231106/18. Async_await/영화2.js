const movieList = movieTitle => {
  return new Promise(resolve => {
    fetch(`http://www.omdbapi.com/?apikey=8457acd2&s=${movieTitle}`)
  .then(response => response.json())
  .then(response=>{
    console.log(response);
    resolve()
  })
  })
}
const wrapping = async () => {
  await movieList('avatar')
  console.log('아바타');
  await movieList('avengers')
  console.log('어벤져스');
  await movieList('frozen')
  console.log('겨울왕국');
}
wrapping();
// fetch함수는 BOM API 라서 REPL로는 확인 불가 - html문서를 통해서 실행