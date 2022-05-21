const http = require('http'); //개발을 배우는 단계에서는 http모듈로 작성하고 배포할 때 http2로 바꿀 것임.
const courses = {
  { name: 'HTML' }, 
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'node' },
  { name: 'Frontend' },
};
const server = http.createServer((req, res) => {    //req는 request, res는 response. listener를 등록해야함.
    const url = req.url;   //what?(클라이언트가 무엇을 원하는가)
    const method = req.method;  //how?, action?
    if(url === '/courses') {
      if(method === "GET") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(courses));
      } else if(method === 'POST') {   //postman사용해서 결과 확인.(브라우저에서는 할 수 없다)
        const body = [];
        req.on('data', chunk => {
          console.log(chunk);
          body.push(chunk);
        });

        req.on('end', () => {
          const course = JSON.parse(Buffer.concat(body).toString());
          courses.push(course);
          console.log(course);
          res.writeHead(201);
          res.end();
        })
      }

    }
    
}); 

server.listen(8080);   //괄호 안에는 어떤 port에서 listen할 것인지 적는다.
//이 상태에서 브라우저에 localhost:8080이라고 치면 콘솔창에 incoming...이라고 출력되는 것을 확인할 수 있다. 
