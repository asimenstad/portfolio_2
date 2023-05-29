import { useState } from "react";
import * as S from "./Nav.styles";
import { Spiral as Hamburger } from "hamburger-react";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <S.Header>
      <S.Nav>
        <S.HamburgerWrapper>
          <Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} size={20} />
        </S.HamburgerWrapper>
        <S.NavLinks isOpen={isOpen}></S.NavLinks>
      </S.Nav>
    </S.Header>
  );
}

export default Nav;
