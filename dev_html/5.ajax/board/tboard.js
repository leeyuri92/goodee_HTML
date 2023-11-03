function getText(el) {
    let text = ""; //ES6 ->ECMAScript2015 - 적용안되는 브라우저이면 babel필요하다 또는 번들러 parcel(웹팩-리액트)
    if (el != null) {
      if (el.childNodes) {
        // el null스킵, undefined, "", NaN
        console.log(el + ", " + el.childNodes.length);//1 1
        for (let i = 0; i < el.childNodes.length; i++) {
          //el.childNodes.length
          //costEl, priceEl
          let childNode = el.childNodes[i]; //el.childNodes[0], el.childNodes[1]
          //너 텍스트 노드니?
          if (childNode.nodeValue != null) {
            text = text + childNode.nodeValue;
          }
        }
      }
    }
    return text;
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