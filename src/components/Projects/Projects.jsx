import * as S from "./Projects.styles.jsx";
import { projects } from "/src/assets/projects/projects.jsx";

function Projects() {
  return (
    <S.Section id="projects">
      <h2 className="section-header">Prosjekter</h2>
      {projects.map(({ title, description, builtWith, linkGithub, linkLiveSite, image }) => (
        <S.Card key={title}>
          <S.CardInfo>
            <h3>{title}</h3>
            <p>{description}</p>
            <S.List>
              {builtWith.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </S.List>
            <S.Button href={linkGithub}>
              <span className="button-text">Github</span>
            </S.Button>
          </S.CardInfo>
          <a href={linkLiveSite}>
            <S.CardImg src={image} />
          </a>
        </S.Card>
      ))}
    </S.Section>
  );
}

export default Projects;
