var fs = require('fs');

//fs.readFile(실행시킬파일명, 인코딩형식 , 콜백함수)
//es5문법
fs.readFile('sample.txt', 'utf-8' , function(err,data){
    //console.log(data);
} );

//es6문법 
fs.readFile('sample.txt', 'utf-8', (err,data) => {
    console.log(data);
});

//es6에서 화살표함수는 매개변수 => {실행할 내용} 으로사용된다.