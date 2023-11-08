function funcA(num){
  num = 5;
  console.log(num);
}

const value = 3;

funcA(value)
console.log(value);

// 대조군
const fruit = { name :'🍅'}
function funcB(obj){
  obj.name = '🍑'
  console.log(obj);
}

funcB(fruit)
console.log(fruit);