import * as S from "./About.styles.jsx";

function About() {
  return (
    <S.Section id="about">
      <S.Text>
        <h2 className="section-header">Om meg</h2>
        <p>
          Jeg liker å lage solide og helhetlige digitale opplevelser gjennom design og kode. Jeg har et øye for det
          visuelle og bryr meg om de små detaljene.
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
        <S.Img src="/images/profil.jpg" alt="Anna" />
      </S.ImgContainer>
    </S.Section>
  );
}
export default About;
