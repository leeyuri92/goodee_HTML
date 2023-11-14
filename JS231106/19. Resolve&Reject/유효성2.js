// resolve, reject 흉내내기
// 아래 함수 내부에서 fetch를 통해 스프링 서버에게 요청을 할 수 있다.
//

const validFunc = (index) => {
  return new Promise((resolve,reject) => {
    // fetch 오는 자리 - url값이다. - 172.16.2.3:8000/dept/getDeptList.jsp
    setTimeout (() => {
      if(index > 10){
        reject(`${index}는 10보다 클 수 없습니다.`)
        return;
      }
      console.log(index);
      resolve(index+1)
    },1000)
  })
}
validFunc(5)
.then(res => console.log(res))
.catch(err => console.error(err))
.finally(() => console.log('처리완료'));

validFunc(15)
.then(res => console.log(res))
.catch(err => console.error(err));