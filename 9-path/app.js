//파일의 경로에 접근하거나 경로와 관련된 task를 처리해야 할 때 path 모듈을 사용한다.

const path = require('path');

//운영체제마다 path를 정의하는 방식이 다르기 때문에 손으로 직접 작성하기보다는 path모듈을 사용하는 것이 중요하다.
//POSIX(Unix, Mac, Linux): 'Users/temp/myfile/html'
//Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep);    //경로 구분자 출력
console.log(path.delimiter);     //환경변수 구분자 출력

//basename API
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));   //확장자 제거

//dirname
console.log(path.dirname(__filename));    //directory 이름만 출력

//extension
console.log(path.extname(__filename));    //확장자만 출력

//parse
const parsed = path.parse(__filename);
console.log(parsed);       //파일 정보들이 object형태로 출력됨
parsed.root
parsed.name

//format
const str = path.format(parsed);
console.log(str);         //object형태로 출력된 정보들을 경로 형태로 출력

//isAbsolute   현재 경로가 절대 경로인지 확인 가능
console.log('isAbsolute?', path.isAbsolute(__dirname));      //절대 경로
console.log('isAbsolute?', path.isAbsolute('../'));          //상대 경로

//normalize     이상한 경로를 알아서 고쳐줌
console.log(path.normalize('./folder////////sub'));

//join
console.log(__dirname + path.sep + 'image');       //운영체제별로 경로 구분자가 다른 것을 반영
console.log(path.join(__dirname, 'image'));        //join을 사용하면 directory명과 추가하고 싶은 파일을 작성하면 알아서 path를 출력해줌

