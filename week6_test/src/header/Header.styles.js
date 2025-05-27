import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: #1C1B1A;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  padding: 8px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &.active {
    color: black;
    font-weight: bold;
  }
`;
