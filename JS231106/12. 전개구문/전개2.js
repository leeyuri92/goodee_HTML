// 반복처리
// 유사배열도 가능한가 
// 순수배열만 가능한가.

// 받아온 값들의 형태가 배열안에 배열안에 배열이 있는 경우가 많다.
// 안에안에안에있는 값들을 자유자재로 가지고 올 수 있어야 한다.

let depts = [{
  0:{deprno :10, dname : '총무부', loc: '부산'},
  1:{deprno :20, dname : '개발부', loc: '서울'},
  2:{deprno :30, dname : '인사부', loc: '인천'}
}]
let depts2 = [
  {
  0:{deprno :10, dname : '총무부', loc: '부산'},
  1:{deprno :20, dname : '개발부', loc: '서울'},
  2:{deprno :30, dname : '인사부', loc: '인천'}
},
{
  0:{deprno :10, dname : '총무부', loc: '부산'},
  1:{deprno :20, dname : '개발부', loc: '서울'},
  2:{deprno :30, dname : '인사부', loc: '인천'}
}
]

depts.forEach((dept,index) => {
  if(index===0){
    console.log(dept)
    console.log(dept.dname)
    console.log(dept[0])
    console.log(dept['loc'])    
    console.log(dept[0]['loc'])    
    console.log(dept[0].loc)    
    console.log(dept[1]['loc'])    
  }
})
depts.forEach((dept,index) => {
  if(index===1){
    console.log(dept)
    console.log(dept.dname)
    console.log(dept['loc'])    
  }
})

depts.map((dept,index)=>{
  console.log(dept)
  console.log(dept.dname)
  console.log(dept[0])
  console.log(dept['loc'])    
  console.log(dept[0]['loc'])    
  console.log(dept[0].loc)    
  console.log(dept[1]['loc']) 
})