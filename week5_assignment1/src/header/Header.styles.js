import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: #1C1C1C;
  text-align: center;
  font-family: "TT Travels Next Trl";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.div`
  color: #A7A7A7;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &.active {
    color: #1C1C1C;
    font-weight: bold;
    border-bottom: 4px solid darkorange;
  }
`;
