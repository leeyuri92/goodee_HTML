const colors = ['red','green','blue']
// 배열
// ES5
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
// ES6
const [c1,c2,c3] = colors;
console.log(c1+c2+c3);

// 2. 객체
const dept = {
  deptno : 10,
  dname: '개발부',
  loc : '서울'
}

const {deptno, dname, loc} = dept
console.log(dept.deptno);
console.log(dept['dname']);
console.log(deptno);
console.log(dname);
console.log(loc);