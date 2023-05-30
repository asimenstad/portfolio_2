import * as S from "./Cv.styles.jsx";

function Cv() {
  return (
    <S.Section>
      <h2 className="section-header">CV</h2>
      <S.Div>
        <S.CvHeader>Utdanning</S.CvHeader>
        <ul>
          <S.ListItem>
            <p className="bold">Noroff</p>
            <p>Frontend-utvikling</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Høgskulen i Volda</p>
            <p>Mediedesign, bachelor</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Yamanashi Gakuin ICLA, Japan</p>
            <p>Utveksling fra Høgskulen i Volda</p>
          </S.ListItem>
        </ul>
      </S.Div>
      <S.Div>
        <S.CvHeader>Arbeidserfaring</S.CvHeader>
        <ul>
          <S.ListItem>
            <p className="bold">Cubus</p>
            <p>Butikkselger</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Rjukan Hotell</p>
            <p>Servitør og resepsjonist</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Nordre Øyen Barnehage</p>
            <p>Barnehageassitent</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Norske Selskab</p>
            <p>Servitør</p>
          </S.ListItem>
        </ul>
      </S.Div>
    </S.Section>
  );
}

export default Cv;
