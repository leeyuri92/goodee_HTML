const fruits = ['🍅',' 🍑', '🍇', '🥝']
console.log(fruits);

console.log(...fruits);

// 매개변수에 전개연산자를 넣어 나머지 인자들도 받아 올 수 있음
toObject1 = (a,b, ...c) => {
  return {
    a:a,b:b,c:c
  }
}
toObject2 = (a,b, ...c) => {
  return {
    a,b,c  // 속성의 이름과 데이터의 이름이 같으면 축양형으로 가능하다
  }
}
  toObject3 = (a,b, ...c) =>({a,b,c}) 


console.log(toObject1(...fruits));
console.log(toObject2(...fruits));
console.log(toObject3(...fruits));