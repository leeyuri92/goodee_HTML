// {} object -> [] Array  -> [{},{},{}] (List<Map> or List<VO>)

const user = {
  name : '나신입',
  age : 35,
  email : 'nice@hot.com'
}

const user2 = {
  address : '서울시 마포동 공덕동',
  address2 : '인천시'
}
const {address2 = '부산시'} = user2
const {name, age, email, address} = user;

console.log(name,age,email,address);
console.log(user.name);
console.log(user['name']);
console.log(`${user['name']}`);

console.log(user2);
console.log(user2.address2);
console.log(address2);