const a =() =>{
  console.log('A');
}
const b =(c) =>{
  console.log(c);  // [Function:a]
  c();
}
b(a);