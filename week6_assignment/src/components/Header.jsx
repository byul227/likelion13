// src/components/Header.jsx
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>KREAM</Logo>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 24px;
  font-size: 48px;
  font-weight: bold;
`;

const Logo = styled.div`
  color: black;
`;
