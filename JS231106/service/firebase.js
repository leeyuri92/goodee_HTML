
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
//import { initializeApp } from "firebase/app";  로컬에 설치되어 있을 때 사용 하기

const firebaseConfig = { 
  apiKey: "AIzaSyC_slH4leI1v_iJEx3IQLyme9S_crOzBKw",  
  authDomain: "gd-230918.firebaseapp.com",
  projectId: "gd-230918",
  storageBucket: "gd-230918.appspot.com",
  messagingSenderId: "513152421555",
  appId: "1:513152421555:web:3431f882fd90673c492ac6"
};

export const app = initializeApp(firebaseConfig); //  app에 위에 정보들을 넣어줌 