import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Oauth2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get('accessToken');

    const accessTokenExpiration = new URL(
      window.location.href,
    ).searchParams.get('expiresIn');

    if (token) {
      localStorage.setItem('accessToken', token);
      localStorage.setItem('accessTokenExpiration', accessTokenExpiration);
    }
    console.log('token : ' + token);
    console.log('local : ' + localStorage.getItem('accessToken'));

    navigate('/events');
  }, []);

  return (
    <div>
      <h2>oauth2</h2>
    </div>
  );
};
export default Oauth2;
