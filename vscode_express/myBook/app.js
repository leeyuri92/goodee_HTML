/*
웹 애플리케이션을 위한 기본적인 설정을 가지고 있다
모듈을 로딩하고  템플릿 엔진을 설정하여 라우터 설정함
파일 상단에는 사용할 모듈을 로딩하는 코드가 작성됨
외부 모듈을 해당 파일에서 사용하고 싶다면 require() 함수를 호출해야 함

자바의 입장에서 보면 익스프레스가 서블릿이나 jsp랑 같다
이유는 아래애들이 내장객체이다. 직접 값을 넣어주지 않아도 된다.
app.use()  
app.get()  
app.post()
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//라우트 코드를 로딩하는 코드임. require()함수를 사용하며
//로딩한 라우트 함수들을 지정된 변수로 사용할 수 있게 해줌
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//express객체를 app변수로 선언함
var app = express();

// view engine setup
//익스프레스에서 사용할 템플릿 엔진을 설정하는 코드임
//__dirname은 현재 디렉토리를 의미하며 path.join()함수는 경로를 연결하는 기능을 함
app.set('views', path.join(__dirname, 'views'));
// ejs가 아닌 html확장자는 호출이 불가 - app.js에 html에 대한 마임타입이 정의되어 있지 않다.
app.set('view engine', 'ejs');//템플릿엔진의 종류
//파라미터에 지정된 인자를 실행하는 함수임
//여기서는 각각의 모듈을 사용하도록 설정함
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// 정적페이지 물리적인 위치 설정
// static을 붙여서 정적으로 처리함
app.use(express.static(path.join(__dirname, 'public')));  // 배포위치
//라우트를 설정하는 코드임. 여기서 라우트는 url경로의 뒷부분을 의미함
//'/'와 관련된 라우트는 routes폴더의 index파일에 설정된 라우트 함수를 통해 처리됨
app.use('/', indexRouter);   // index.js
// '/users'와 관련된 라우트는 users파일에 작성된 라우트 함수를 통해 처리됨 - MyPage, 대시보드, 장바구니
app.use('/users', usersRouter);  // users.js

// catch 404 and forward to error handler, 404에러에 대한 처리
// 요청이 있어야 사용자가 입력한 값을 서버측에서 요청 할 수 있다.
// 응답은 앞에 요처엥 대한 처리 후 응답페이지의 이동이나 출력 결과를 text or json 형식의 출력을 받아낼 수 있다.
// 내장객체이고 express에 자동 주입해줌 - 의존성주입
app.use(function(req, res, next) {  // use 함수는 get,post방식에 구분없이 사용, 요청객체와 응답객체를 주입해주는 함수
  next(createError(404)); // 다음 미들웨어로 이동할 때 필요한 함수
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
