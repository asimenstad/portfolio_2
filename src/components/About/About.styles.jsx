import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  color: ${(props) => props.theme.color.muted};
`;

export const ImgContainer = styled.div`
  max-width: 20rem;
`;
export const Img = styled.img`
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
`;
