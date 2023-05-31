import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & h2 {
    margin-bottom: 3rem;
  }
  & p {
    display: flex;
    gap: 1rem;
  }
`;
