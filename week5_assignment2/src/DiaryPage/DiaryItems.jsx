// src/DiaryPage/DiaryItems.jsx
import styled from "styled-components";
import img1 from "../assets/images/diary1.png";
import img2 from "../assets/images/diary2.png";
import img3 from "../assets/images/diary3.png";

export default function DiaryItems() {
  return (
    <Wrapper>
      <StickyNote color="#FFD464">다들 사랑해요호!!!!!!!</StickyNote>
      <StickyNote color="#C8F169">최강동아리멋사<br />그 중 서경대가 최강</StickyNote>

      <ImageCard src={img1} alt="단체사진" />
      <StickyNote color="#736DF9">내가더더더</StickyNote>

      <StickyNote color="#F88484">
        글씨를 어떻게도 작게 쓸 수 있어요<br />
        그치만 이렇게 쓰면 안보이겠죠?<br />
        시원하게 씁시다<br />
        글씨를 이렇게도 작게 쓸 수 있어요<br />
        그치만 이렇게 쓰면 안보이겠죠?<br />
        시원하게 씁시다<br />
        글씨를 이렇게도 작게 쓸 수 있어요<br />
        그치만 이렇게 쓰면 안보이겠죠?<br />
        시원하게 씁시다<br /> 
      </StickyNote>

      <ImageCard src={img2} alt="발표중" />

      <StickyNote color="#5B4E9A">
        여기 후기 쓰는 곳임<br />
        그래서 제 소감은요...<br />
        이하 생략
      </StickyNote>

      <ImageCard src={img3} alt="점수 집계 중" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const StickyNote = styled.div`
  background-color: ${props => props.color || "#FFF"};
  padding: 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  width: fit-content;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
  font-family: Pretendard;
`;

const ImageCard = styled.img`
  width: 400px;
  border-radius: 10px;
`;
