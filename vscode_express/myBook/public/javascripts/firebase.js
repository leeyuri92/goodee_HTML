
  // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  //import { initializeApp } from "firebase/app";  로컬에 설치되어 있을 때 사용 하기

  // https://firebase.google.com/docs/web/setup#available-libraries

  // 여기에 생성된 객체는 어떻게 사용되나
  // 객체 - 키:값
  const firebaseConfig = { 
    apiKey: "AIzaSyC_slH4leI1v_iJEx3IQLyme9S_crOzBKw",
    authDomain: "gd-230918.firebaseapp.com",
    projectId: "gd-230918",
    storageBucket: "gd-230918.appspot.com",
    messagingSenderId: "513152421555",
    appId: "1:513152421555:web:3431f882fd90673c492ac6"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
