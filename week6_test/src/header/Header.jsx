// src/components/Header.jsx
import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>LIKELION</Logo>
      <Nav>
       <NavItem to="/" end className={({ isActive }) => (isActive ? "active" : "")}>로그인</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
