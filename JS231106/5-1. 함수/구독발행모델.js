// 함수안에 함수를 선언할 수 있다. - 일급함수 - 리덕스 -> FLUX아키텍쳐
// {} - const 객체, 참조형, 함수가 들어갈 수 있다
const createStore = () => {
  let state;
  let handlers=[];
  const send = () => {}
    //구독해줘를 함수에 담아->영속성, 유지
  const subscribe = (handler) => {
    handlers.push(handler)
  }  
  return {
    send,
    subscribe,
  }
}
//store 상수 안에 리턴값인 함수 두개 들어감
const store = createStore();
console.log(store);

//함수호출은 아래와 같이?
store.subscribe(() => {
  console.log(subscribe);
})
store.send()