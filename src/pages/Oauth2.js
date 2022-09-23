import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Oauth2 = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['jwtCookie']);

  useEffect(() => {
    async function cookie() {
      const token = await new URL(window.location.href).searchParams.get(
        'accessToken',
      );
      const accessTokenExpiration = await new URL(
        window.location.href,
      ).searchParams.get('expiresIn');
      if (token) {
        setCookie('jwtCookie', token);
        setCookie('jwtExpireCookie', accessTokenExpiration);
      }
    }
    navigate('/events');
  }, []);

  console.log('jwt : ' + cookies.jwtCookie);
  console.log('expire : ' + cookies.jwtExpireCookie);
  return (
    <div>
      <h2>oauth2</h2>
    </div>
  );
};
export default Oauth2;
