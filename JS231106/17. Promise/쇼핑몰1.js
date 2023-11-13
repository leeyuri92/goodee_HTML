// Promise prototype 활용하여 비동기처리 해보기

const 상품조회 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log('상품조회');
      const goods = {name:'스킨', price:3000}
      resolve(goods)
    },2000)
  })
}

const 카트담기 = () => console.log('카트담기');

상품조회().then((response) => {
  console.log(response);
  카트담기();
})
