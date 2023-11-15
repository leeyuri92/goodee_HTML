function Emp(fName,lName){
  this.fName = fName; // 자바와는 다르게 선언부에서 선언할 수 없다-class라는 껍데기가 없다.this를 붙여서 전변화 시킴
  this.lName = lName;
}

Emp.prototype.printName = function(){
  return `${this.fName} ${this.lName}`
}

const james = new Emp('초보','나');  // 생성자 함수
const king = new Emp('신입','나');

console.log(james.printName());
console.log(james.printName);
console.log(king.printName());