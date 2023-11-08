const a = 123;
console.log(typeof a);
console.log(typeof '이순신' == 'string');
console.log(typeof '이순신' === 'string');
console.log(typeof undefined == 'undefined');
console.log(typeof null == 'object');
console.log(typeof [] == 'object');
console.log(typeof {} == 'object');
console.log(typeof function(){} == 'function');

// 타입까지 같니? ===
console.log([].constructor === Array);
console.log({}.constructor === Object);