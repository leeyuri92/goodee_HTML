function Emp(fName,lName){
  this.fName = fName; 
  this.lName = lName;
}

Emp.prototype.printName = function(){
  return `${this.lName} ${this.fName}`
}

Emp.prototype.see = function(pic){
  console.log(pic);
}

const james = new Emp('초보','나');  
const king = new Emp('신입','나');

console.log(james.printName());
console.log(king.printName());
james.see('노을사진')