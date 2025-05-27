// src/pages/ProjectPage.jsx
import styled from "styled-components";
import project1 from "../assets/images/img_1.png";
import project2 from "../assets/images/img_2.png";
import project3 from "../assets/images/img_3.png";
import Button from "../components/Buttons";
export default function HomePage() {
  return (
    <>
      <MainContainer>
        <Section>
          <Text>안녕하세요,</Text>
          <Text>멋쟁이사자처럼입니다.</Text>
          <Button/>
        </Section>
        <ImageSection>
          <Image src={project1} alt="단체OT" />
          <Image src={project2} alt="아이디어톤" />
          <Image src={project3} alt="멋사MT" />
        </ImageSection>
        {/* <Card /> */}
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const Section = styled.div`
  text-align: center;
`;

const Text = styled.p`
 color: #1C1B1A;
 font-family: Pretendard;
 font-size: 48px;
 font-style: normal;
 font-weight: 700;
 line-height: 130%; /* 62.4px */
`;

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const Image = styled.img`
  width: 370px;
  height: 277px;
  border-radius: 30px;
  background: linear-gradient(179deg, rgba(0, 0, 0, 0.00) 1.07%, rgba(0, 0, 0, 0.00) 27.99%, rgba(0, 0, 0, 0.00) 57.35%, #1A1A1A 98.95%);
`;
