// src/components/Header.jsx
import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
       <NavItem to="/" end className={({ isActive }) => (isActive ? "active" : "")}>About</NavItem>
      <NavItem to="/project" className={({ isActive }) => (isActive ? "active" : "")}>Project</NavItem>
      <NavItem to="/diary" className={({ isActive }) => (isActive ? "active" : "")}>Diary</NavItem>
      <NavItem to="/qna" className={({ isActive }) => (isActive ? "active" : "")}>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
