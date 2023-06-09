import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 3rem;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const CvHeader = styled.h3`
  min-width: 10rem;
`;

export const ListItem = styled.li`
  list-style: revert;
  color: var(--color-cta);
  margin-bottom: 1rem;
  margin-left: 1rem;

  & p {
    color: var(--color-black);
    margin-left: 1rem;
  }
`;
