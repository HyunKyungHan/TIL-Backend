//promise라면 catch를 이용해 에러를 잡아내는 것이 중요하다.
//api를 사용할 때 필요한 인자값이나 return값을 알아보는 것이 좋다.

const fs = require('fs').promises;

//read a file using readfile api
fs.readFile('./text.txt')      //file을 buffer형태로 불러옴
.then(data => console.log(data))
.catch(console.error);     

fs.readFile('./text.txt', 'utf8')   //utf8로 인코딩되도록 해주면 'Hello!'라고 출력됨.


//write a file using writeFile api
fs.writeFile('./file.txt', 'Hello, Dream Coders!:)')
.catch(console.error);      //error가 발생할 경우를 대비해 항상 catch를 써주는 것이 중요하다. 

fs.writeFile('./file.txt', 'Yo, Dream Coders!:)')
.then(() => {        //promises는 비동기이기 때문에 순서가 보장이 되지 않음. 순서가 보장이 되어야 하는 경우 then안에서 순차적으로 일을 해야함.
    //copy
    fs.copyFile('./file.txt' , './file2.txt') 
    .catch(console.error);
})
.catch(console.error);      //writeFile은 이전에 쓴 text를 덮어씀

fs.appendFile('./file.txt', 'Hola, Dream Coders!:)')    //text를 덮어쓰는게 아니라 추가하고 싶을 땐 appendFile 사용
.catch(console.error);

//copy
fs.copyFile('./file.txt' , './file2.txt')   //어떤 파일을 어디로 복사할 것인지 작성
.catch(console.error);     

//folder
fs.mkdir('sub-folder')
.catch(console.error);     //return값이 없으므로 catch(console.error);을 활용

fs.readdir('./')
.then(console.log)
.catch(console.error);