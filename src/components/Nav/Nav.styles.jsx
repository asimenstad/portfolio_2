import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  position: relative;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    padding: 2rem;
  }
`;

export const HamburgerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  max-width: 100%;
  padding: 2rem;
  padding-bottom: 0;
  z-index: 2;
  background-color: var(--color-white);
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4rem;
  width: 100%;
  gap: 2rem;
  padding-block: 4rem;
  text-align: center;
  background-color: var(--color-white);
  transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-120%)")};
  transition: all 0.5s;
  z-index: 1;
  @media screen and (min-width: 600px) {
    padding: 1rem;
    transform: translateX(0);
    position: static;
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
