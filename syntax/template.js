var nickName = 'jming623';

//리터럴 : 변하지 않는 값(데이터)를 표현하는 방법 ex var aaa = 1; 여기서 aaa는 변수고, 1은 숫자1을 표현하는 리터럴이다. 

// String literals
// ''(홀따옴표)안에 작성되는 String리터럴은 줄바꿈시 \(백슬레쉬)가 필요하고, 변수를 사용할때 기존의 문자열을 닫아주고 +연산자를 통해 사용할 수 있다. (ex: '(문자열)'+ (변수명) +'(문자열)' )
var letter1 = 'Dear'+ nickName +'\n\nLorem ipsum dolor sit amet,\
consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
'+nickName+' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.\
'+nickName;
 
// Template literals
// ``(그레이브액센트)안에 작성되는 Template리터럴은 줄바꿈시 다른 명령어가 필요하지 않고, 변수를 사용할떄 +연산자가 필요없이 ${변수명} 로 바로 사용할 수 있습니다.
// 템플릿 리터럴 안에서의 ${}는 변수 뿐만아니라 1+1등의 다른 타입, 연산의 결과도 들어올 수 있다.    
var letter2 = `Dear ${nickName}
 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
${nickName} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
${1+1} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.
${nickName}`;
 
console.log(letter1);
console.log();
console.log(letter2);
