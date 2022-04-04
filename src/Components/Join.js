import React, {useState} from "react";
import axios from 'axios'


function Join () {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
  
    const loginMessge = () => {
      alert('환영합니다.');
      axios.post('http://localhost:3001/posts', {
        name,
        id, /*키랑 데이터랑 같으면 하나만 써도 됨*/
        password
      });
    };

    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            alert('환영합니다.');
            axios.post('http://localhost:3001/posts', {
                name,
                id, /*키랑 데이터랑 같으면 하나만 써도 됨*/
                password
              });
        }
      };

    return(
        <>
            <div>
            <h1>환영 합니다!</h1>
            <h1>방쿡 회원가입</h1>

            <span>
                <input 
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                  }}
                >
                </input></span>
                <span>
                <input 
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => {
                    setId(e.target.value);
                  }}
                >
                </input></span>
                <span>
                <input 
                type="text"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyUp={onKeyUp}
                >
                </input></span>
                <button onClick={loginMessge}>회원가입</button>
                
                <div style={{display:'flex',
                 alignItems:'center',justifyItems:'center'}}>
                <div className="box"
                style={{  width: '20px',
                    height: '20px',
                    border: '1px solid black'}}
                ></div>
                <span> <h4 style={{maginBottom:'0px'}}>(필수)</h4></span>
                <h3 style={{maginBottom:'0px'}}>개인정보 이용 동의</h3>
                </div>

                <div style={{display:'flex',
                 alignItems:'center',justifyItems:'center'}}>
                <div className="box"
                style={{  width: '20px',
                    height: '20px',
                    border: '1px solid black'}}
                ></div>
                <span> <h4 style={{maginBottom:'0px'}}>(필수)</h4></span>
                <h3 style={{maginBottom:'0px'}}>방쿡 이용 동의</h3>
                </div>
            </div>
        </>
    );
}
export default Join;