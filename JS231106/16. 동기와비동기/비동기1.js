const hap = (a,b)=>{
  setTimeout(()=>{
    return a+b;
  },1000)
}

const x = hap(1,2)
const y = x;
console.log(x);
console.log(y);