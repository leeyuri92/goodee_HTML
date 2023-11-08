const sayHello = () => {
  return function aa(){
    console.log('hello');
  }
}
console.log(sayHello);
const myFunc = sayHello()
console.log(myFunc);
sayHello()
myFunc()

hap = (a,b) =>{
  return a+b
}

const add = hap;
console.log(add);
console.log(hap);