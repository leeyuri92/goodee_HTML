import number, { Sonata, fruits, str } from './module.js'
console.log(number);
console.log(str);
console.log(fruits);
console.log(fruits.length);

const myCar = new Sonata()
console.log(myCar.speed)
console.log(myCar.wheelNum);
console.log(myCar.carColor)
myCar.speedUp() // 함수 이름 뒤에 괄호가 있어야 호출
// 자바에서는 전변을 반드시 선언하고 this.XX 형태로 사용해야 하지만
// 자바스크립트에서는 선언을 생략하고 this를 바로 사용해도 됨 - 전변으로 인식
console.log(Sonata);


