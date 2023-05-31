import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  position: relative;
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
  padding: 1rem;
  text-align: center;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  @media screen and (min-width: 600px) {
    flex-direction: row;
    display: flex;
    justify-content: end;
    width: 100%;
  }
`;

export const NavLink = styled.a`
  background: linear-gradient(currentColor, currentColor) left bottom / 0 0.1rem no-repeat;
  padding-bottom: 0.2rem;
  transition: 0.5s background-size;
  :hover {
    background-size: 100% 0.1rem;
  }
`;
