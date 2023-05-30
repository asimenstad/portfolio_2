import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 6rem;
  gap: 2rem;
  @media screen and (min-width: 650px) {
    flex-direction: row-reverse;
    &:nth-child(odd) {
      flex-direction: row;
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
  max-width: 30rem;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
  border-radius: 0.1rem;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  color: ${(props) => props.theme.color.muted};
`;

export const Button = styled.a`
  text-transform: uppercase;
  text-align: center;
  border: 0.1rem solid #000;
  border-radius: 0.1rem;
  padding: 0.2rem 1rem;
  max-width: 5rem;
`;
