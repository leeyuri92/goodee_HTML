var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');  /* 파라미터 문자열이 출력 */
});
router.get('/cart', function(req, res, next) {
  res.render('index',{title : '장바구니', pageName : 'users/cart.ejs'}); /* 화면을 출력 */
});
router.get('/join', function(req, res, next) {
  res.render('index',{title : '회원가입', pageName : 'users/join.ejs'}); 
});

module.exports = router;
