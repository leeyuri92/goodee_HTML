// 리액트 활용되다가 훅으로 지원함 - 클래스 사용빈도 좀 줄어듦 - this 불분명한 부분 
class Fruit{
  constructor (name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  // 함수 선언시 function 예약어 사용 불가
  display = () => {
    console.log(`${this.emoji}:${this.emoji}`);
  }
}
// kiwi는 Fruit클래스의 인스턴스변수
const kiwi = new Fruit('kiwi','🥝')
const tomato = new Fruit('tomato','🍅')

console.log(kiwi);
console.log(kiwi['name']);
console.log(kiwi.name);
tomato.display();
kiwi.display()