// src/layouts/MyLayout.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const MyLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>{children}</main>
    </>
  );
};

export default MyLayout;
