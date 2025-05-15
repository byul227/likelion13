// src/pages/MyAccount.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  const [name, setName] = useState('익명');
  const [profileUrl, setProfileUrl] = useState('/image.jpeg');


  useEffect(() => {
    const storedName = localStorage.getItem('username');
    const storedProfile = localStorage.getItem('profile');
    if (storedName) setName(storedName);
    if (storedProfile) setProfileUrl(storedProfile);
  }, []);

  return (
    <div>
      <h2>{name}님, 환영합니다!</h2>
      <img src={profileUrl} alt="프로필" width="100" />
      <br />
      <Link to="/edit-profile">이름 변경하러 가기</Link>
    </div>
  );
};

export default MyAccount;
