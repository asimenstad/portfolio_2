import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const HamburgerWrapper = styled.div`
  align-self: flex-end;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
  }
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

export const NavLink = styled.a`
  background: linear-gradient(currentColor, currentColor) left bottom / 0 2px no-repeat;
  padding-bottom: 0.1rem;
  transition: 0.5s background-size;
  :hover {
    background-size: 100% 0.1rem;
  }
`;
