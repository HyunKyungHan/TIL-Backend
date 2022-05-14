const fs = require('fs');

//모든 api는 3가지 형태로 제공된다.
//rename(...., callback(error, data))  -> 비동기이기 때문에 필요한 일들을 모두 마친 후에 callback함수를 호출함. callback함수의 인자들을 통해 에러가 발생했는지, data를 성공적으로 받아왔는지 알 수 있음.
//renameSync(....)   -> blocking. 따로 callback함수를 전달하지 않음. 코드 실행이 끝날 때까지 다음 줄로 넘어가지 않음. sync는 에러 사항을 전달해주지 않으므로 항상 try-catch로 감싸줘야함.
//promises.rename().then().catch(0)
//sync보다는 callback이나 promises를 사용하는 게 낫다.

try{
    fs.renameSync('./text.txt' , './file-new.txt');
} catch(error) {
    console.error(error);
}

fs.rename('./file-new.txt' , './text.txt', (error) => {     //error가 발생하지 않으면 null이 출력됨.
    console.log(error);
});
console.log('hello');

fs.promises.rename('./text2.txt' , './text-new.txt')
.then(() => console.log("Done!"))
.catch(console.error );
