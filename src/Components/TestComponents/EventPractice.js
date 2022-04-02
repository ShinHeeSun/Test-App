import React, { useState } from 'react';

function EventPractice() {
  const [message, setMessage] = useState('');

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const onClick = () => {
    alert(message);
    setMessage('');
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="입력하세요"
        value={message}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <button onClick={onClick}> 확인</button>
    </>
  );
}
export default EventPractice;
