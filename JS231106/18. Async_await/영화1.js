// OMDB API 실습

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

// movieList('avatar');
movieList('avatar')
.then(() => {
  console.log('아바타');
  return movieList('avengers')
})
.then(() => {
  console.log('어벤져스');
  return movieList('frozen')
})
.then(() => {
  console.log('겨울왕국');
})