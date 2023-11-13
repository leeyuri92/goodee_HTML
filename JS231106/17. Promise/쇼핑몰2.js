const 상품조회 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log('상품조회');
      const goods = {name:'스킨', price:3000}
      resolve(goods)
    },1000)
  })
}

const 카트담기 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log('카트담기');
      const goods = {name:'스킨', name1 : '샴푸', name2:'뽀또치즈맛'}
      resolve(goods)
    },3000)
  })
}

const 결제하기 = () => console.log('결제하기');

상품조회()
.then((response) => {
  console.log(response);
  return 카트담기();
})
.then((response) => {
  console.log(response);
  console.log(response.name);
  console.log(response.name1);
  console.log(response.name2);
  return 결제하기();
})