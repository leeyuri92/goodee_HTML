import axios from "axios";
// 인자 params안에 사용자가 입력한 값이 담겨있다. const login = {mem_id:'kiwi',mem_pw:'123'}
export const memberInsertDB = (params) => {
  return new Promise((resolve,reject) => {
    try {
      const response = axios({
        method : 'GET',
        url: 'http://172.16.2.120:9000/member/memberInsert',
        params : params
      })
      resolve(response);  // response => [{'mem_name':'나신입','mem_email':'nice@hot.com'}]
    } catch (error) {
      reject(error);
    }
  })
}
export const memberListDB = (params) => {
  return new Promise((resolve,reject) => {
    try {
      const response = fetch('http://172.16.2.120:9000/member/memberList');
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}