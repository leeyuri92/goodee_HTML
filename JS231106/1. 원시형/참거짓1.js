// 거짓 6가지
// 1. false
// 2. 0
// 3. null
// 4. undefined
// 5. NaN
// 6. 빈문자열

if(123){ console.log('참'); }
if('0'){ console.log('문자열 0은 참이다. 속지말자'); }
if(NaN){ } else { console.log('NaN도 false이다'); }
if(null){ } else { console.log('null도 false이다'); }
if(undefined){ } else { console.log('undefined도 false이다'); }
if(''){ } else { console.log('빈문자열도 false이다'); }
