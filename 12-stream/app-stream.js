const fs = require('fs');

const readStream = fs.createReadStream('./file.txt' , {
    highWaterMark: 8,
    encoding: 'utf-8',

});   //stream에서는 데이터가 조금씩 도착하면 우리에게 알려준다.
    

//덩어리로 입력받아 배열에 저장 후 배열의 문자열들을 합해서 출력
const beforeMem = process.memoryUsage().rss;
const data = [];
readStream.on('data', (chunk) => {
    //console.log(chunk);
    data.push(chunk)
    console.count('data');
});

readStream.on('end', () => {
    console.log(data.join(''))
})