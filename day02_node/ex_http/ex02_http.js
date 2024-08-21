var http = require('http');

var server = http.createServer();
server.listen(3000, () => {
    console.log("http://localhost:3000");
});

const htmlStr = `
<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>Node.js응답</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <h1>Nodejs 응답 페이지</h1>
        <p>박건도 한상훈 그만 잘하라고;;;;</p>
    </body>
</html>
`;

server.on('request', (req, res) => {
    console.log('>>> 클라이언트 요청이 들어왔습니다.');
    //res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write(htmlStr);
    res.end();
});

// server.on('request', function(req, res){
//     console.log('클라이언트 요청이 들어왔습니다.');
    
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     res.write("<!DOCTYPE html");
//     res.write("<html>");
//     res.write("    <head>");
//     res.write("        <title>응답 페이지</title>");
//     res.write("    </head>");
//     res.write("    <body>");
//     res.write("        <h1>노드제이에스로부터의 응답 페이지</h1>");
//     res.write("    </body>");
//     res.write("</html>");
//     res.end();
// });