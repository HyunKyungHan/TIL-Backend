const http = require('http'); //개발을 배우는 단계에서는 http모듈로 작성하고 배포할 때 http2로 바꿀 것임.
const fs = require('fs');
const url = req.url;

const server = http.createServer((req, res) => {    //req는 request, res는 response. listener를 등록해야함.
    console.log('incoming...');
    console.log(req.headers);   //말그대로 headers에 관한 정보를 request한다는 것이다.
    console.log(req.httpVersion);    //httpVersion request
    console.log(req.method);   //어떤 method로 요청이 들어왔는지 request
    console.log(req.url);      //url request
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');  //1.공유하는 대상이 그냥 text가 아니고 html임.
        res.write('<html>');
        res.write('<head><title>Academy</title></head>');
        res.write('<body><h1>Welcome!</h1></body>');
        res.write('</html>');
    } else if(url === '/courses') {
        res.write('Courses');    //2.검색창에 http://localhost:8080/courses 작성 시 
    }   else {
        res.setHeader('Content-Type', 'text/html');   //3.따로 작성한 html파일을 링크하기
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
    
    res.end();   //끝내기
}); 
/*콘솔창 결과:
incoming...
{
  host: 'localhost:8080',
  connection: 'keep-alive',
  'cache-control': 'max-age=0',
  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*//*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
}
1.1
GET
/
incoming...
{
  host: 'localhost:8080',
  connection: 'keep-alive',
  'cache-control': 'max-age=0',
  'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*//*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
}
1.1
GET
*/ 


server.listen(8080);   //괄호 안에는 어떤 port에서 listen할 것인지 적는다.
//이 상태에서 브라우저에 localhost:8080이라고 치면 콘솔창에 incoming...이라고 출력되는 것을 확인할 수 있다. 
