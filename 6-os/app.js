const os = require('os');

//운영체제마다 새로 줄바꿈을 할 때 들어가는 문자열이 달라짐
console.log(os.EOL === '\n');     //MAC 
console.log(os.EOL === '\r\n');     //WINDOWS

//이 외에도 os 모듈을 사용해 os에 관련한 정보들을 얻을 수 있음.