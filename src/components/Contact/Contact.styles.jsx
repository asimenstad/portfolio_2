import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  & h2 {
    margin-bottom: 3rem;
  }
  & p {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
