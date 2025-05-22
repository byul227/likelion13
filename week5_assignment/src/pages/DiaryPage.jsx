// src/pages/ProjectPage.jsx
import styled from "styled-components";
import Header from "../header/Header";
import DiaryItems from "../DiaryPage/DiaryItems";
import point from "../assets/images/point3.png";

export default function DiaryPage() {
  return (
    <>
      <Header />
      <Container>
        <TitleWrapper>
        <PointImg src={point} alt="포인트" />
        <Title>Project</Title>
        </TitleWrapper>
        <Desc>
          2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 여러분이 느꼈던 모든 것을 적어주세요! <br />
          이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요! 방명록이라고 편하게 생각 부탁함~
        </Desc>
        <Greenbutton>방명록 쓰러가기</Greenbutton>
        <DiaryItems />
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 60px 80px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; 
`;

const PointImg = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h1`
  color: #1C1C1C;
  font-family: Pretendard;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px; /* 125% */
`;

const Desc = styled.p`
  color: #7C7C7C;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 142.857% */
`;

const Greenbutton = styled.button`
    margin-top: 16px;
    background: #6ada55;
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
`;
