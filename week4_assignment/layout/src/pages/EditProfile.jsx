// src/pages/EditProfile.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [newName, setNewName] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    if (newName.trim()) {
      localStorage.setItem('username', newName);
      navigate('/my-account');
    }
  };

  return (
    <div>
      <h2>이름 변경하기</h2>
      <input
        type="text"
        placeholder="새 이름 입력"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleSave}>저장</button>
    </div>
  );
};

export default EditProfile;
