import * as S from "./Intro.styles.jsx";
import { Github, Linkedin } from "@styled-icons/feather";

function Intro() {
  return (
    <>
      <h1>Hei</h1>
      <S.Section>
        <S.Text>
          <p>Mitt navn er Anna Simenstad.</p>
          <p>Jeg er en frontend-utvikler med interesse for design og brukervennlighet.</p>
        </S.Text>
        <S.Links>
          <a href="https://github.com/asimenstad">
            <Github size={35} />
          </a>
          <a href="https://www.linkedin.com/in/anna-simenstad-9875a421a/">
            <Linkedin size={35} />
          </a>
        </S.Links>
      </S.Section>
    </>
  );
}

export default Intro;
