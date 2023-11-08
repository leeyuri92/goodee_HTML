// forEach(callbackFn) 에 대해

const fruits = ['🍅','🍑','🍇']
fruits.forEach(element => console.log(element))
fruits.forEach((element,index) => console.log(element,index))
fruits.forEach((element,index,fruits) => console.log(element,index,fruits))

fruits.forEach((element,index) => {
  console.log(element,index)
  document.write(index,element)
})
// 두번째 까지는 쓰지만 세번째 코드는 쓸 일이 없다.