let sonata ={
  carName : '2024년형 소나타',
  carColor : '검정',
  wheelNum : 4
}

// 속성, 데이터에 접근하는 방법
console.log(sonata.wheelNum);
console.log(sonata['carColor']);

// 속성 추가 가능함
sonata.speed = 30;
console.log(sonata['speed']);

// 속성삭제
delete sonata.carColor;
console.log(sonata.carColor);