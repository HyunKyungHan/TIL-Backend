const http = require('http'); //개발을 배우는 단계에서는 http모듈로 작성하고 배포할 때 http2로 바꿀 것임.
const fs = require('fs');
const ejs = require('ejs');
const url = req.url;

const name = 'Hyun Kyung';
const courses = {
  { name: 'HTML' }, 
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'node' },
  { name: 'Frontend' },
};
const server = http.createServer((req, res) => {    //req는 request, res는 response. listener를 등록해야함.
    res.setHeader('Content-Type', 'text/html');     //따로 작성한 html파일을 링크하기
    if(url === '/') {
        ejs.renderFile('./template/index.ejs', {name}).then(data => res.end(data))
    } else if(url === '/courses') {
      ejs
        .renderFile('./template/courses.ejs' , {courses})
        .then((data) => res.end(data));
    }   else {
      ejs
      .renderFile('./template/not-found.ejs' , {courses})
      .then((data) => res.end(data));
    }
    
    res.end();   //끝내기
}); 


server.listen(8080);   //괄호 안에는 어떤 port에서 listen할 것인지 적는다.
//이 상태에서 브라우저에 localhost:8080이라고 치면 콘솔창에 incoming...이라고 출력되는 것을 확인할 수 있다. 
