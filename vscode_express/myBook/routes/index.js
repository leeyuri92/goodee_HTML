var express = require('express');     //외부 프레임워크 가져올때
var router = express.Router();        // 페이지 전환

/* GET home page. 
express가 Restful API를 지원해서 웹 서비스를 제공할 수 있게 해준다 (서블릿, JSP)
router는 페이지 전환 해주는 API, 화면전환 처리 이벤트

get함수의 첫번째 파라미터가 요청에 대한 URL주소이다.
URL주소마다 자바단에서는 메소드를 설계(구현)해야 한다.

get요청에 대한 첫번째 자리는 요청에 따른 URL 패턴 이름이다 
이름을 가지고 메소드를 나눈다. - 프레임워크(스프링)에서는 그렇게 해준다
그래서 라우터가 눈에 보이지 않는다.

첫번째 파라미터가 요청객체(request)이다 
- 정보담기, 사용자가 입력한 값을 받아옴, 요청이 유지되는 동안 유지해줌
파라미터 응답객체(response)이다 
- mime type -> 브라우저 확장자는 의미없다. = 라우팅
확장자가 jsp더라도 application/json으로 되어있다면 JSON인거다

함수로 나누어 지지 않은 대신 세번째 인자인 next를 통해서 다른 서비스를 호출해준다.

express프레임워크에서는 request, reponse 제공해줌
다른 서비스를 요청하기 위해서 next도 제공
next 통해서 다른 서비스 즉 다른 미들웨어 연결도 가능
Restful 지원 받을 수 있다. - 웹서비스 구현하고 제공할 수 있다.
express 역할을 하는 것이 서블릿이다.

render함수 호출 시 화면을 그려줌 - 그래서 파라미터 자리에는 반드시 html파일이 온다.
res.send("값"); 인자값이 전송됨 - 값이 JSON일 수도 있다.
응답에 대한 결과가 꼭 html일 필요는 없다.
화면처리에 대한 엔진으로 ejs가 선택되었다.

*/
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서관리 시스템',pageName:'home.ejs' });
});
router.get('/login', function(req, res, next) {  // app.js -> __div
  res.render('index', { title: '로그인', pageName:"auth/login.ejs" });
});
router.get('/board', function(req, res, next) {  
  res.render('index', { title: '글목록', pageName:"board/list.ejs" });
});
router.get('/board/write', function(req, res, next) {  
  res.render('index', { title: '글쓰기', pageName:"board/write.ejs" });
});
router.get('/board/:id', function(req, res, next) {  
  let id = req.params.id;
  res.render('index', { title: '상세보기', pageName:"board/read.ejs",id:id });
});
router.get('/board/update/:id', function(req, res, next) {  
  let id = req.params.id;
  res.render('index', { title: '글수정', pageName:"board/update.ejs",id:id });
});

module.exports = router;
