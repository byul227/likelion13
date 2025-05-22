import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: #1c1c1c;
  font-size: 48px;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;

export const NavItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #aaa;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;

  &.active {
    color: black;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 3px;
      background-color: #57df6c;
      border-radius: 4px;
    }
  }
`;
