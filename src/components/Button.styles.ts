import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface BunttonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orage",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<BunttonContainerProps>`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 4px;
  margin: 5px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["green-500"]};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
