const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const label = document.querySelector('.label')

addEventListener('load', () => {
  console.log('test')
  const domRect = target.getBoundingClientRect()
  const twidth = domRect.width
  const theight = domRect.height
  console.log(`${twidth},${theight}`)
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX
    const y = event.clientY
    console.log(`${event.clientX},${event.clientY}`)
    // 문제제기 - 좌표값이 출력은 되지만, 가로세로선이 그대로임
    vertical.style.left = `${x}px`         // 수직선
    horizontal.style.top = `${y}px`        // 수평선 

    target.style.left = `${x}px`           // 이미지
    target.style.top = `${y}px`

    label.style.left = `${x}px`            // 좌표
    label.style.top = `${y}px`

    label.innerHTML = `(${x}px, ${y}px)`  //  좌표띄워주기
    // TextNode는 NodeName은 없는 NodeValue는 있다.
    // label.innerHTML = `(100px, 200px)`
  })
})
