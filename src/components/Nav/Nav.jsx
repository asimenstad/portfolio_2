import { useState } from "react";
import * as S from "./Nav.styles";
import { Spiral as Hamburger } from "hamburger-react";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <S.Nav>
        <S.HamburgerWrapper>
          <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} size={20} />
        </S.HamburgerWrapper>
        <S.NavLinks isOpen={isOpen}>
          <li>
            <S.NavLink>Om meg</S.NavLink>
          </li>
          <li>
            <S.NavLink name="projects">Prosjekter</S.NavLink>
          </li>
          <li>
            <S.NavLink name="cv">CV</S.NavLink>
          </li>
          <li>
            <S.NavLink name="contact">Kontakt</S.NavLink>
          </li>
        </S.NavLinks>
      </S.Nav>
    </header>
  );
}

export default Nav;
