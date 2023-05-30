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
            <S.NavLink>Prosjekter</S.NavLink>
          </li>
          <li>
            <S.NavLink>Kontakt</S.NavLink>
          </li>
        </S.NavLinks>
      </S.Nav>
    </header>
  );
}

export default Nav;
