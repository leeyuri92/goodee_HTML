// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Spread syntax - 주소의 참조값만 복사해 온다

let emp = {key : 'empno'}
let dept = {key : 'deptno'}
let member = {key : 'memno'}

const array = [emp, dept]
console.log(array);

const arrayCopy = [...array]  // 얕은복사
console.log(array);
console.log(array.emp === arrayCopy.emp); //  얕은복사 증명 1

// 증명 2
arrayCopy.push(member)
console.log(array);
console.log(arrayCopy);

const arrayCopy2 = [...arrayCopy,{key:'bookno'}]
console.log(arrayCopy2);

// Object merge
let emp1 = {key1 : 'empno'}
let dept1 = {key2 : 'deptno'}
const obj1 = {emp1, dept1}
console.log(obj1);
const obj2 = {...emp1, ...dept1}
console.log(obj2);