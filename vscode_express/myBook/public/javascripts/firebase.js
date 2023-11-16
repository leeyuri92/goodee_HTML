
  // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  // initializeApp은 firebase-app에서 제공하는 함수이다.
  // 
  //import { initializeApp } from "firebase/app";  로컬에 설치되어 있을 때 사용 하기

  // https://firebase.google.com/docs/web/setup#available-libraries

  // 여기에 생성된 객체는 어떻게 사용되나
  // 객체 - 키:값 (오브젝트이다. 클래스가 아니다)
  const firebaseConfig = { 
    apiKey: "AIzaSyAehZHmdRLiR9Sm-qsaEOaKm-5dnavodQ0",
    authDomain: "mybook-4b419.firebaseapp.com",
    projectId: "mybook-4b419",
    storageBucket: "mybook-4b419.appspot.com",
    messagingSenderId: "368598980629",
    appId: "1:368598980629:web:f9cfa34d1ebd594599961c"
  };

  // Initialize Firebase - 파이어베이스 플젝을 활용하여 웹서비스를 제공받기 위한 초기화 작업
  // 앞에 export를 붙여야 외부에서 사용이 가능 - ES6모듈
   
  export const app = initializeApp(firebaseConfig);
