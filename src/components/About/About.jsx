import * as S from "./About.styles.jsx";

function About() {
  return (
    <S.Section>
      <S.Text>
        <h2 className="section-header">Om Meg</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sunt tempore. Ullam, ea ratione mollitia
          illo sunt porro aliquid nobis iusto cum, nam consequuntur eius facilis ut cupiditate non fugiat?
        </p>
        <div>
          <h3>Nøkkelkvalifikasjoner</h3>
          <S.List>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Rest API</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>Styled Components</li>
            <li>Figma</li>
          </S.List>
        </div>
      </S.Text>
      <S.ImgContainer>
        <S.Img src="/src/assets/images/profil.jpeg" alt="Anna" />
      </S.ImgContainer>
    </S.Section>
  );
}
export default About;