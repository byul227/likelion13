import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

export const Buttons = styled.button`
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background: #1C1B1A;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 1.3s;
  color: #fefefe;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-flex;
  padding: 10px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #444;
  }
`;
