import { useState } from "react";
import * as S from "./Nav.styles";
import { Spiral as Hamburger } from "hamburger-react";
import { NavHashLink } from "react-router-hash-link";

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
            <NavHashLink smooth to="#about" className="nav-link">
              Om meg
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#projects" className="nav-link">
              Prosjekter
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#cv" className="nav-link">
              CV
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="#contact" className="nav-link">
              Kontakt
            </NavHashLink>
          </li>
        </S.NavLinks>
      </S.Nav>
    </header>
  );
}

export default Nav;
