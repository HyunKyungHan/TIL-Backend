//Q. 4-module 내의 다른 파일인 counter.js에서 정의한 getCount를 불러오고 싶다면?
//A. 먼저 counter.js에서 어떤 것을 외부에 노출(export)할 것인지 정해야한다.
//A. 또한 사용하고자 하는 파일(app.js)에서 어떤 것을 외부로부터 가져올 것인지(import) 정해야 한다.

//가져오기: require 사용
const counter = require('./counter.js');

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());    //3

console.log(module);    //module에 대한 정보 확인 가능
