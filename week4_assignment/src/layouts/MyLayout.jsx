// MyLayout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom'; // ✅ 꼭 있어야 함

const MyLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Outlet /> 
      </main>
    </>
  );
};

export default MyLayout;
