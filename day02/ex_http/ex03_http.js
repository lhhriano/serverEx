var fs = require('fs');

var data = fs.readFileSync('./data.txt', 'utf-8');
//비동기로 먼저 실행
console.log(data);