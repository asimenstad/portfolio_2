import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
`;

export const Text = styled.div`
  max-width: 25rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  & a {
    color: var(--color-black);
    transition: ease-in-out 0.3s;
    &:hover {
      color: var(--color-cta);
    }
  }
`;
