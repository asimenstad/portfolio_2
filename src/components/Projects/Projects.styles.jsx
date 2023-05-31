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
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 700px) {
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
  padding-block: 1rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  color: ${(props) => props.theme.color.muted};
`;

export const Button = styled.a`
  display: flex;
  max-width: 3.3rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background: var(--color-cta);
    transition: all 0.7s cubic-bezier(0.6, -0.55, 0.25, 1.55);
    z-index: -1;
  }
  & .button-text {
    position: relative;
    text-transform: uppercase;
    color: #fff;
    mix-blend-mode: difference;
    z-index: 1;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
