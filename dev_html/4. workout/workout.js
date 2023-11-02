const items   = document.querySelector('.items')
const input   = document.querySelector('#footer_input')
const btnPlus = document.querySelector('.footer_button')

plusEvent = () => {                // 사용자가 입력한 텍스트를 받아온다.    
    const text = input.value;
    console.log(text);
    if(text===''){
        input.focus();
        return; }    
    const item = createItem(text);  // 새로운 아이템을 만든다 (텍스트 + 삭제버튼)    
    items.appendChild(item);        // items 컨테이너안에 새로 만든 아이템을 추가한다.
    item.scrollIntoView({block:'center'}); // 포커스가 마지막에 추가된곳으로     
   
    input.value = '';               // input 값을 초기화 한다.    
    input.focus();                  // 커서가 미리 가있으면 마우스 클릭하지 않고도 즉시 입력가능
    // 만일 아무것도 입력하지 않고 버튼을 누르면 포커스를 input text로 옮기고 함수를 탈출 
}
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');
    const item = document.createElement('div');
    item.setAttribute('class','item');
    const name = document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerText = text;
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item_delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click',()=>{                
        items.removeChild(itemRow) });
    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item_divider');
    item.appendChild(name);
    item.appendChild(deleteBtn);
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

btnPlus.addEventListener('click',() =>{
    plusEvent();
})

//엔터를 쳤을때도 작동하는 함수  onkeyPress
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      plusEvent()
    }
  })

    // createItem이 호출되었을 때 화면이 먼저 완성(랜더링==DOM Tree)되고
    // 그 이후 버튼이 눌려지므로 파라미터의 itemRow는 createItem함수 생성됨
    // 전부를 쥐고 있다.
    // 로컬pc에 다운로드 되며, 그 시점에서 실행되는 것

