// src/DiaryPage/DiaryItems.jsx
import styled from "styled-components";
import img1 from "../../assets/images/diary1.png";
import img2 from "../../assets/images/diary2.png";
import img3 from "../../assets/images/diary3.png";

export default function DiaryItems() {
  return (
      <Wrapper>
            <StickyNote width="782px" height="806px" fontSize="130px">다들<br/>사랑해요호<br/>!!!!!!!</StickyNote>
            <StickyNote width="884px" height="451px" fontSize="100px" bgColor="#cffd03" top="201px" left="730px">최강동아리멋사<br/>그 중 서경대가 최강</StickyNote>
            <StickyNote rotate="-6.481deg" width="561px" height="373px" fontSize="90px" bgColor="#7072f3" textColor="white" top="1400px" left="190px" style={{zIndex:"1"}}>내가더더더</StickyNote>
            <ImageCard width="1016px" height="575px" top="1000px" left="650px" style={{zIndex:"-1"}} src={img1} alt="단체사진" />
            <StickyNote width="522px" height="537px" fontSize="33px" top="1900px" left="500px" bgColor="#FF7984" textColor="white">
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다<br/>
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다<br/>
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다
            </StickyNote>
            <ImageCard width="473px" height="537px" top="2280px" left="135px" src={img2} alt="발표중"/>
            <StickyNote width="665px" height="444px" fontSize="60px" top="2500px" left="1100px" bgColor="#8646b1" textColor="white">여기 후기 쓰는 곳임<br/>그래서 제 소감은요...<br/>(이하생략</StickyNote>
            <ImageCard width="1034px" height="1033px" top="3000px" left="380px" src={img3} alt="점수집계" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const StickyNote = styled.div`
  background-color: ${(props) => props.bgColor || "#FFD15B"};
  color: ${(props) => props.textColor || "#000"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: 900;
  display: grid;
  place-items: center;
  position: absolute;
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  text-align: left;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  transform: rotate(${(props) => props.rotate || "0deg"});
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
`;

const ImageCard = styled.img`
    display: grid;
    place-items: center;
    position: absolute;
    top: ${(props) => props.top || "0px"};
    left: ${(props) => props.left || "0px"};
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "200px"};
    border-radius: 12px;
`;