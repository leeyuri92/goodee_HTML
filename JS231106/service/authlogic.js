import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup 
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
} //end of AuthLogic


  // import {} from './경로'  
  // default가 있을 땐 {} 괄호 안됨
export default AuthLogic;     // default로 {}가 있느냐 없느냐 구분할 줄 알아야 함
// html,js에서 클래스의 주소번지 없이도 함수를 쓰고 싶다면 함수 선언 앞에 export를 붙인다.
// authLogic.loginGoogle 처럼 쓰고싶지않다 
// 로그아웃 (html버튼을 누를때) 할 때 호출되는 함수
// 파라미터에는 auth (firebase.js -> app -> getAuth)가 필요
// 인정한 통로가 아닌 곳으로 오는 건 침입자로 판단 - catch 403번 에러 발생
export const logout = (auth) => {   //  인증정보를 가져와 넣어줘야 signOut함수 호출이 가능
  return new Promise((resolve,reject) => {
    auth.signOut().catch(e => reject(alert(e+" : 로그아웃 에러 발생"))) // 인증토큰 없이 로그인시도를 한다면 해커로 인식 
    // 원서비스에서는 세션에서 관장해야한다. - 구글 서버측에서 담당 -> signOut()이 호출되면 WAS같은 서버에 자원반납하고 연결해제 
    localStorage.removeItem('uid') //  uid는 구글서버로부터 정상적으로 토큰을 받아서 가지고 있는 것
    localStorage.removeItem('displayName') 
    localStorage.removeItem('email') 
    resolve()
  })
  // 인증을 위해 구글서버에 요청할 때 기다림이 필요하므로 요청에 대한 답변을 확실히 받을 때 Promise함수 사용 
}

export const loginGoogle = (auth, googleProvider) => {
  console.log('loginGoogle호출 성공');
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);//object Object - 안보임 - uid, displayName-realname, email
      console.log(JSON.stringify(result));
      const user = result.user;
      localStorage.setItem('uid',user.uid)
      localStorage.setItem('displayName',user.displayName)
      localStorage.setItem('email',user.email)
      resolve(user)
    }).catch((error) => reject(error));
  });
}; //end of loginGoogle


//파이어베이스 인증에 등록해둔 이멜과 비번으로 로그인하기
export const loginEmail = (params) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}; //end of loginEmail
