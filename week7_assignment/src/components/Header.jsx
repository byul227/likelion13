// Header.jsx
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Search, ShoppingBag, Menu } from "lucide-react";

export default function Header() {
  return (
    <Wrapper>
      <Left>
        <Logo src={logo} alt="KREAM" />
      </Left>
      <RightSection>
        <TopMenu>
          <span>고객센터</span>
          <span>마이페이지</span>
          <span>관심</span>
          <span>알림</span>
          <span>로그인</span>
        </TopMenu>
        <BottomRow>
          <Center>
            <MenuItem>HOME</MenuItem>
            <MenuItem>STYLE</MenuItem>
            <MenuItem>SHOP</MenuItem>
          </Center>
          <IconBox>
            <StyledIcon><Search /></StyledIcon>
            <StyledIcon><ShoppingBag /></StyledIcon>
            <StyledIcon><Menu /></StyledIcon>
          </IconBox>
        </BottomRow>
      </RightSection>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Left = styled.div``;

const Logo = styled.img`
  width: 250px;
  height: auto;
  object-fit: contain;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TopMenu = styled.div`
  display: flex;
  gap: 16px;
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Center = styled.nav`
  display: flex;
  gap: 32px;
  font-size: 30px;
  font-weight: 500;
`;

const MenuItem = styled.div`
  cursor: pointer;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyledIcon = styled.div`
  svg {
    width: 32px;
    height: 32px;
    color: #222;
    cursor: pointer;
  }
`;
