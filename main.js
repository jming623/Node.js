//모듈을 불러오는 명령문 require();
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    
  var _url = request.url;   
  // console.dir("url모듈갑:" + url); 

  //주소요청을 http://localhost:3000/?id=HTML 이렇게 주었다면 QueryData값은 {id: 'HTML'} 이렇게 나오게됩니다. 다시 QueryData.id를 호출하면 HTML이 출력됩니다.
  var queryData = url.parse(_url,true).query;
  var title = queryData.id;

  if(_url == '/'){
    title = 'Welcome';
  }

  if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
  }
  response.writeHead(200);
  //console.log(__dirname + _url);

  fs.readFile(`data/${title}`, 'utf-8', (err,data) => {
    // console.log('err:'+err);
    // console.log('data:'+data);

    if(title == 'Welcome'){
      var description = "환영합니다.";
    }else{
      var description = data;
    }

    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>
        ${description}
      </p>
    </body>
    </html>    
    `;

    response.end(template);

  });
   
 
});
app.listen(3000);