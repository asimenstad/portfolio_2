import * as S from "./Cv.styles.jsx";

function Cv() {
  return (
    <S.Section id="cv">
      <h2 className="section-header">CV</h2>
      <S.Div>
        <S.CvHeader>Utdanning</S.CvHeader>
        <ul>
          <S.ListItem>
            <p className="bold">Noroff</p>
            <p className="caption">August 2021 - Juni 2023</p>
            <p>Frontend-utvikling</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Høgskulen i Volda</p>
            <p className="caption">August 2017 - Juni 2020</p>
            <p>Mediedesign, bachelor</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Yamanashi Gakuin ICLA, Japan</p>
            <p className="caption">Mars 2019 - August 2019</p>
            <p>Utveksling fra Høgskulen i Volda</p>
          </S.ListItem>
        </ul>
      </S.Div>
      <S.Div>
        <S.CvHeader>Arbeidserfaring</S.CvHeader>
        <ul>
          <S.ListItem>
            <p className="bold">Cubus</p>
            <p className="caption">Juli 2022 - nå</p>
            <p>Butikkselger</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Rjukan Hotell</p>
            <p className="caption">Desember 2021 - August 2022</p>
            <p>Servitør og resepsjonist</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Nordre Øyen Barnehage</p>
            <p className="caption">Januar 2021 - August 2021</p>
            <p>Barnehageassitent</p>
          </S.ListItem>
          <S.ListItem>
            <p className="bold">Norske Selskab</p>
            <p className="caption">September 2015 - Mars 2019</p>
            <p>Servitør</p>
          </S.ListItem>
        </ul>
      </S.Div>
    </S.Section>
  );
}

export default Cv;
