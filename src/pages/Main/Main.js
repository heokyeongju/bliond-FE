import arrow from '../../resource/arrow.png';
import BliondLogo from '../../resource/BliondLogo.png';
import { NavLink } from 'react-router-dom';

const Main = () => {
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
          <img src={arrow} width="180px" height="100px" alt="" />
        </div>
      </NavLink>
    </div>
  );
};
export default Main;
