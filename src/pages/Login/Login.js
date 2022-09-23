import './Login.css';
import BliondLogo from '../../resource/BliondLogo.png';
import kakao_login_medium_wide from '../../resource/kakao_login_medium_wide.png';

const Login = () => {
  const token = new URL(window.location.href).searchParams.get('accessToken');

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
          <h6 style={{ fontFamily: 'GowunBatang-Regular' }}>
            당신의 모든 궁금증을 위한 곳
          </h6>
          <img src={BliondLogo} className="BliondLogo" alt=" " />
        </div>
      </div>
      <div className="site-button-ghost-wrapper">
        <a href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth2/redirect">
          <img src={kakao_login_medium_wide} alt=" " />
        </a>
      </div>
    </div>
  );
};
export default Login;
