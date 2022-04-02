import React, { useState } from 'react';

function Login() {
  const loginMessge = () => {
    alert('환영합니다.');
  };
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onkeyup = (e) => {
    if (e.keyCode === 'Enter') {
      loginMessge();
    }
  };
  return (
    <div>
      <input
        value={id}
        type="text"
        placeholder="ID를 입력 해주세요."
        onChange={(e) => setId(e.target.value)}
      ></input>
      <input
        value={password}
        type="text"
        placeholder="PASSWORD를 입력 해주세요."
        onChange={(e) => setPassword(e.target.value)}
        onKeyUp={onkeyup}
      ></input>
      <button onClick={loginMessge}>로그인</button>
    </div>
  );
}
export default Login;
