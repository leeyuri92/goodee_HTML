const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDv6uaDKVIKfBdqyqggywMQe04wuPc3CNs&type=video&q=nba", requestOptions)
  .then(async response => {
    const data = await response.json();
    console.log(data);
    console.log(data.items);
    console.log(JSON.stringify(data));
  })  
.catch(error => console.log('error', error));
