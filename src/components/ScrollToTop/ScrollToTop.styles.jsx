import styled from "styled-components";
import { ArrowUp } from "@styled-icons/feather";

export const Button = styled.button`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 5px;
  bottom: 15%;
  background-color: var(--color-cta);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0;
  padding: 0;
  z-index: 100;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    background-color: transparent;
    & :first-child {
      color: var(--color-cta);
      stroke-width: 2;
    }
  }
  @media screen and (min-width: 1100px) {
    right: 10px;
  }
  @media screen and (min-width: 1300px) {
    right: 10%;
  }
`;

export const Arrow = styled(ArrowUp)`
  color: var(--color-white);
  width: 1.5rem;
  height: 1.5rem;
  stroke-width: 1.5;
`;
