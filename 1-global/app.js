const fs = require('fs');

console.log(global);
//브라우저에서는 window가 global객체이고, node.js에서는 global이 global객체이다.

global.hello = () => {
    console.log('hello');
}

global.hello();
hello();    //global은 생략 가능