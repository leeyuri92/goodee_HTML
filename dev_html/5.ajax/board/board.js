let xhrObject = null
function createRequest() {
  try {
    xhrObject = new XMLHttpRequest()
  } catch (error) {
    console.log(error)
  }
  if (xhrObject == null) {
    alert('비동기 통신 객체 생성 에러')
  }
}
// 어떤 조건(0 > 1 > 2 > 3)을 만족하면 시스템이 호출해주는 함수 - 콜백- 비동기처리
// 개발자가 지정한 콜백함수를 시스템이 알 수 있도록 추가 코딩이 필요하다.
accountProcess = () => {
  console.log(`accountProcess호출 => ${xhrObject.readyState}`)
  if (xhrObject.readyState == 4) {
    if (xhrObject.status == 200) {
      //200 -> OK
      //20을 읽어온다. - boardSellAction.html(백엔드- 자바-스프링)
      const newTotal = xhrObject.responseText //새로 받아온 값을 담음
      console.log(`${newTotal}`) //20 관전포인트 - 프론트와 백엔드 접점
      const boardSoldEl = document.querySelector('#boardSold');
      replaceText(boardSoldEl,newTotal) // 10 -> 20 으로 바뀌는 사실이 중요
      // 구매가
      const costEl = document.querySelector('#cost');
      let cost = getText(costEl)
      // 소비자가
      const priceEl = document.querySelector('#price')
      let price = getText(priceEl)
      // 보드 한 개당 마진 금액 계산
      let cashPerBoard = price - cost;
      let cash = cashPerBoard * newTotal
      console.log(`마진금액은 ${cash}`);

      // 마진금액을 붙여본다.
      const cashEl = document.querySelector('#cash');
      replaceText(cashEl,cash)
    }
  }
}
getBoardSold = () => {
  const msg = 'getBoardSold호출'
  console.log(`${msg}`)
  // 비동기객체 생성
  createRequest()
  const url = './boardSellAction.html'
  //let url;
  //url = 'http://127.0.0.1:9000/board/boardSellAction.jsp'
  // 집계를 담당하는 페이지 호출
  xhrObject.open('GET', url, true)
  xhrObject.onreadystatechange = accountProcess
  xhrObject.send()

  // 콜백함수 지정 - readyState가 변할 때마다 브라우저 호출 - 상태 체크 프로세스
}

function getText(el) {
    let text = ""; //ES6 ->ECMAScript2015 - 적용안되는 브라우저이면 babel필요하다 또는 번들러 parcel(웹팩-리액트)
    if (el != null) {
      if (el.childNodes) {  // 0이 아닌건 모두 false
        // el null스킵, undefined, "", NaN
        console.log(el + ", " + el.childNodes.length);//1 1
        for (let i = 0; i < el.childNodes.length; i++) {
          //el.childNodes.length
          //costEl, priceEl
          // 브라우저는 같은 이름이 여러개이면 자동으로 배열로 전환해준다.
          let childNode = el.childNodes[i]; //el.childNodes[0], el.childNodes[1]
          //너 텍스트 노드니?
          if (childNode.nodeValue != null) {
            text = text + childNode.nodeValue;
          }
        }
      }
    }
    return text; // 100 100
  }
  //기존 TextNode의 값을 다른 문자열로 바꾸기
  /***********************************************
      param1 :document.getElementById("boardSold")
      param1 :document.querySelector("#boardSold")
      param2 :xhrObject. 
      ************************************************/
  function replaceText(el, value) {//el-> boardSoldEl(보드판매량), cashEl(마진)
    if (el != null) {//span
      clearText(el); //기존에 있던 10을 지워주세요.
      //새로운 텍스트 노드 15를 생성하기
      var newNode = document.createTextNode(value); //15
      //위에서 생성한 텍스트 노드 값을 el에 붙이는 함수 호출하기
      el.appendChild(newNode);//el boardSoldEl-> <span>10</span> <span id=boardSold or cash></span>  <span>20</span>
    }
  }
  //기존 태그안에 문자열 지우는 함수 구현
  function clearText(el) {
    if (el != null) {
      if (el.childNodes) {//자바스크립트에서는 0이아닌건 모두 참이다
        for (let i = 0; i < el.childNodes.length; i++) {
          let childNode = el.childNodes[i];
          el.removeChild(childNode);//해당 el삭제하기 - DOM API -> 직관적이지 않다-> 유지보수어렵다->쓰기싫다
        }
      }
    }
  }
