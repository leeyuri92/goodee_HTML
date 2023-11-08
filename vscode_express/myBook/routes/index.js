var express = require('express');     //외부 프레임워크 가져올때
var router = express.Router();        // 페이지 전환

/* GET home page. 
express가 Restful API를 지원해서 웹 서비스를 제공할 수 있게 해준다 (서블릿, JSP)
router는 페이지 전환 해주는 API, 화면전환 처리 이벤트

get함수의 첫번째 파라미터가 요청에 대한 URL주소이다.
URL주소마다 자바단에서는 메소드를 설계(구현)해야 한다.
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서관리 시스템',pageName:'home.ejs' });
});
router.get('/login', function(req, res, next) {  // app.js -> __div
  res.render('index', { title: '로그인', pageName:"auth/login.ejs" });
});

module.exports = router;
