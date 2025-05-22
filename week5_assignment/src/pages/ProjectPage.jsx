// src/pages/ProjectPage.jsx
import styled from "styled-components";
import Header from "../header/Header";
import ProjectCard from "../ProjectPage/ProjectCard";
import point from "../assets/images/point2.png";
import project1 from "../assets/images/Project1.png";
import project2 from "../assets/images/Project2.png";
import project3 from "../assets/images/Project3.png";
import project4 from "../assets/images/Project4.png";
import project5 from "../assets/images/Project5.png";
import project6 from "../assets/images/Project6.png";
import project7 from "../assets/images/Project7.png";
import project8 from "../assets/images/Project8.png";

export default function ProjectPage() {
  return (
    <>
      <Header />
      <Container>
        <TitleWrapper>
        <PointImg src={point} alt="포인트" />
        <Title>Project</Title>
        </TitleWrapper>
        <Desc>
          2025 서경대학교 아이디어톤톤 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요! <br />
          모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!
        </Desc>

        <CardGrid>
          <ProjectCard image={project1} alt="댕댕일기" />
          <ProjectCard image={project2} alt="travAI" />
          <ProjectCard image={project3} alt="아이랑" />
          <ProjectCard image={project4} alt="톡식" />
          <ProjectCard image={project5} alt="김비서" />
          <ProjectCard image={project6} alt="꼬북" />
          <ProjectCard image={project7} alt="FrameOut" />
          <ProjectCard image={project8} alt="TPocket" />
        </CardGrid>
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;
