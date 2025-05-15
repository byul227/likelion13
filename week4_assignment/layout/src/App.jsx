import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Card from './components/Card';
import MyLayout from './layouts/MyLayout';
import MyAccount from './pages/MyAccount';
import EditProfile from './pages/EditProfile';
import RootLayout from './layouts/RootLayout';
import Search from './pages/Search';


function App() {
  return (
    <>
      <Container>
        <Info>오늘의 소식</Info>
        <Cards>
          <CardWrapper $imageUrl="https://www.skuniv.ac.kr/files/attach/images/81/882/270/b1334a71965f56b643ad277cd8b0cf5f.png">
            <span style={{ color: 'white', fontSize: '1.25rem', fontWeight: 500 }}>
              2025 서경대학교 대동제 ‘Blooming!’ 개최
            </span>
          </CardWrapper>
          <CardWrapper $imageUrl="https://www.skuniv.ac.kr/files/attach/images/81/882/254/45749ac971d4822c8b726b22832af2ef.jpg">
            <span style={{ color: 'white', fontSize: '1.25rem', fontWeight: 500 }}>
              멋쟁이사자처럼 해커톤 성료
            </span>
          </CardWrapper>
        </Cards>
      </Container>

      <Routes>
        <Route path="/*" element={<RootLayout><Search /></RootLayout>} />
        <Route path="/account" element={<MyLayout><MyAccount /></MyLayout>} />
        <Route path="/edit-profile" element={<MyLayout><EditProfile /></MyLayout>} />
      </Routes>
    </>
  );
}

export default App;

// 스타일 컴포넌트 아래에 쭉~
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Info = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;
const Cards = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const CardWrapper = styled.div`
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
`;
