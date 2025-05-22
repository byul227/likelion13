import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <Link to="/">
          <NavItem>About</NavItem>
        </Link>
        <Link to="/project">
          <NavItem className="active">Project</NavItem>
        </Link>
        <Link to="/diary">
          <NavItem>Diary</NavItem>
        </Link>
        <Link to="/qna">
          <NavItem>QnA</NavItem>
        </Link>
      </Nav>
    </HeaderWrapper>
  );
}