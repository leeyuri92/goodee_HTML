      /*
      toString() : 배열을 문자로 변환
      join() :  구분자를 활용해 문자열로 이어붙이기
      pop() : 배열의 마지막 요소 제거(리턴값으로 잘라낸 요소 반환)
      push() : 배열의 끝부분에 새로운 요소 추가(리턴값으로 배열의 길이 반환)
      shift() : 배열의 첫 부분 요소 제거(리턴값으로 잘라낸 요소 반환)
      unshift() : 배열의 첫 부분에 새로운 요소 추가(리턴값으로 길이 반환)
      splice(삽입위치, 잘라낼 갯수, 추가할 내용) : 배열에 새로운 요소를 잘라서 붙임
      concat() : 두 개의 배열 합치기
      slice() : 배열 잘라내기- 새로운 배열을 만들어서 잘라내기
      */

      // splice & slice => 깊은복사

      const names = ['나신입','강감찬','이성계'];
      const result = names.toString()
      console.log(result);

      //문자열 템플릿을 쓸 때 조인을 쓴다
      const result2 = names.join("+")
      console.log(result2);

      names.splice(1,0,'나초보')
      console.log(names);

      names.slice(1,0,'나초보')
      console.log(names);

      const other = names.slice(1)
      console.log(other);
      console.log(names); // 원본엔 변함이 없다
      other.push('강호동')
      console.log(other);
      console.log(names); // 원본엔 변함이 없다
