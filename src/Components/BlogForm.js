import React, { useState } from 'react';
import axios from 'axios';

function BlogForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const loginMessge = () => {
    alert('환영합니다.');
    axios.post('http://localhost:3001/posts', {
      id /*키랑 데이터랑 같으면 하나만 써도 됨*/,
      password,
    });
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      loginMessge();
    }
  };
  return (
    <div>
      <h1>Test Blogs Post</h1>
      <div className="panel">
        <label className="from-label">ID</label>
        <input
          type="text"
          className="formcontrol"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>

      <div>
        <label className="from-label">PASSWORD</label>
        <input
          type="password"
          className="formcontrol"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onKeyUp={onKeyUp}
        />
      </div>
      <button className="btn btn-primary" onClick={loginMessge}>
        로그인
      </button>
    </div>
  );
}
export default BlogForm;
