// 
const 상품조회 = (callback) => {
  setTimeout(()=>{
    console.log('상품조회');
    callback();
  },1000)
}

const 카트담기 = (callback) => {
  setTimeout(()=>{
    console.log('카트담기');
},2000)
}
const 주문하기 = (callback) =>{
setTimeout(() => {             // BOM API
  console.log('결제하기');
  callback();  
}, 3000);
}

const delivery = () => console.log('배송하기');

상품조회 (() => {
  카트담기(() => {
    주문하기(() => {
      delivery()
    });
  })
})