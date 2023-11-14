const a = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve()
    },1000)
  })
}

const b = () => console.log(2);

const wrapping = async () => {
  await a(); // 비동기처리시 사용되는 setTimeout을 가지고 있다
  b(); 
}
wrapping()