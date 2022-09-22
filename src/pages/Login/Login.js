import './Login.css';
import kakaoLogo from '../../resource/kakaoLogo.png';
import BliondLogo from '../../resource/BliondLogo.png';
import { Button } from 'antd';

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '100px',
        flexDirection: 'column',
      }}>
      <div className="serveMain">
        <div>
          <h6>당신의 모든 궁금증을 위한 곳</h6>
          <img src={BliondLogo} className="BliondLogo" alt=" " />
        </div>
      </div>
      <div className="site-button-ghost-wrapper">
        <Button width="300px" height="100px" className="button">
          <img src={kakaoLogo} className="kakaoLogo" alt=" " />
          카카오 로그인
        </Button>
        <p>카카오로 시작하기</p>
      </div>
    </div>
  );
}
export default Login;
