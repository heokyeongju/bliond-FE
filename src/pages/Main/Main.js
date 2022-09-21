import arrow from '../../resource/arrow.png';
import BliondLogo from '../../resource/BliondLogo.png';
import { NavLink } from 'react-router-dom';

function Main() {
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
      <div>
        <img src={BliondLogo} width="320px" alt=" " />
      </div>
      <NavLink to="/member/login">
        <div>
          <img src={arrow} width="150px" height="120px" alt="" />
        </div>
      </NavLink>
    </div>
  );
}
export default Main;
