const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);  //  ["exuberant", "destruction", "present"]
console.log(words);
console.log(result.length);
console.log(typeof result);

const [r1,r2,r3] = result
console.log(r1);
console.log(r2);
console.log(r3);