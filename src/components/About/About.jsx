import * as S from "./About.styles.jsx";

function About() {
  return (
    <S.Section id="about">
      <S.Text>
        <h2 className="section-header">Om Meg</h2>
        <p>
          Jeg er en nysgjerrig og løsningsorientert utvikler med et ønske om å skape gode digitale opplevelser gjennom
          design og kode. Jeg har stor interesse for designprinsipper og bryr meg om de små detaljene. Jeg er også svært
          opptatt av funksjonalitet og å lage responsive webapplikasjoner som er tilgjengelige for alle.
        </p>
        <div>
          <h3>Nøkkelkvalifikasjoner</h3>
          <S.List>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>API</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>Styled-components</li>
            <li>Unit testing</li>
            <li>End-to-end testing</li>
            <li>Figma</li>
            <li>Adobe XD</li>
          </S.List>
        </div>
      </S.Text>
      <S.ImgContainer>
        <S.Img src="/images/profil.jpeg" alt="Anna" />
      </S.ImgContainer>
    </S.Section>
  );
}
export default About;
