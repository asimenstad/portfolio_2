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
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
