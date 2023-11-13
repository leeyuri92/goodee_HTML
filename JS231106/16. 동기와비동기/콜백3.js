// 1,2,3을 출력하시오

console.log(1);  

const second = (cback) => {
  setTimeout(() => {
    console.log(2);  
    cback()
  },2000)
}

const first = () => {
  console.log(3);   
}

second(first)