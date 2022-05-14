const fs = require('fs');

//write
const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finished!');
});

writeStream.write('hello!');
writeStream.write('world!');
writeStream.end();  //끝났음을 알려줌