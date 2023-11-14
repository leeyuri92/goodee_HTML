const mostVideo = () => {
  return new Promise((resolve,reject) => {
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyDv6uaDKVIKfBdqyqggywMQe04wuPc3CNs&maxResults=15&chart=mostPopular")
      .then(res => {
        const data = res.json();
        console.log(data);
        console.log(data.items);
        })  
      .catch(error => console.log('error', error));
  })
};
const wrapping = async() => {
  await mostVideo();
} //  이렇게 하면 안댐 