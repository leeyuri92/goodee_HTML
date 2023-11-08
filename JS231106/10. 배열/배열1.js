const colors = ['red','blue','green']
console.log(colors);
colors.forEach((color) => {
  console.log(color);
})

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
colors.map((color) => console.log(color))

const arr1 = ['a','b','c']
let cnt = 0;
arr1.forEach(function(element){
  console.log(`element ===> ${element}`);
  cnt++;
})

console.log(cnt);

const names = ['나신입','강감찬','이성계']
const copy = []

 for(let i = 0; i<names.length; i++){
  copy.push(names[i])
  console.log(`copy[${i}] : ${copy[i]}`);
}
// 

copy.push('나초보')
console.log(copy);
console.log(names);

names.forEach((name) => {
  copy.push(names)
  console.log(copy);
})
