setTimeout(async()=>{
  const temp = await import('./module.js')
  console.log(temp);
},3000)

// 자바스크립트는 기본적으로 동기
// 만일 비동기적으로 처리를 해야할 때 setTimeout 함수를 사용
// async와 await 커플

// Front-End : ReactJS, UI솔루션 - 클라이언트 사이드
// Back-End : 자바 - 서버 사이드(지연발생 - 출처가 다름(cors이슈) - 비동기처리)
// 자스는 비동기 처리가 불가
// http://localhost:9000/dept/getDeptList.jsp