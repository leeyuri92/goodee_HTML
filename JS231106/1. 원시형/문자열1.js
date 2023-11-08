// 문자열 상수에 변수를 같이 쓰고 싶을 땐 템플릿리터럴 사용 (문자 + 변수)
const str1 = 'world!!'
const str2 = `Hello ${str1}`  // 템블릿리터럴

console.log(str2);
console.log(str1+str2);

