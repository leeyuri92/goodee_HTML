//
const movieList = movieTitle => {
  return new Promise((resolve, reject) => {
    fetch(`http://www.omdbapi.com/?apikey=8457acd2&s=${movieTitle}`)
    .then(res => res.json())
    .then(json => {
      if(json.Response === 'False'){
        //
        reject(json.Error)
     }
     resolve(json)
    })
    .catch(error => {
     reject(error)
    })
  })
}

movieList('avatar')
.then(movies => console.log(movies))
.catch(error => console.log(error))
.finally(() => loading = false);