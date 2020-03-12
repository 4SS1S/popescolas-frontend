import styled, { css } from "styled-components";

export enum EInputTypes {
  BASE,
  SUCCESS,
  WARNING,
  ERROR
}

export const ButtonSuccess = EInputTypes.SUCCESS;
export const ButtonBase = EInputTypes.BASE;
export const ButtonWarning = EInputTypes.WARNING;
export const ButtonError = EInputTypes.ERROR;

interface IInput {
  inputType?: EInputTypes;
  onlyBorder?: boolean;
}

interface IButton {
  inputType?: EInputTypes;
  onlyBorder?: boolean;
}

const choicer = css<IInput>`
  ${props =>
    props.inputType === EInputTypes.BASE
      ? "#6D95FC"
      : props.inputType === EInputTypes.SUCCESS
      ? "#0FBA3D"
      : props.inputType === EInputTypes.WARNING
      ? "#ED622B"
      : props.inputType === EInputTypes.ERROR
      ? "#C7383C"
      : "#6D95FC"}
`;

const borderBase = css<IInput>`
  border-color: ${choicer};
`;

const backgroundBase = css<IInput>`
  background-color: ${choicer};
`;

export const Input = styled.input<IInput>`
  ${props =>
    props.type !== "text"
      ? props.onlyBorder
        ? borderBase
        : backgroundBase
      : "background-color: #fff"}
  width: 100%;
  padding: 0.45em 0.3em;
  border: 1px solid;
  border-color: ${choicer};
  border-radius: 0.25em;
  outline: none;
  transition: 0.3s;
  display: block;

  :focus {
    box-shadow: 0 0 0.2em 0.11em ${choicer}79;
  }
`;

export const Button = styled.button<IButton>`
  ${props => (props.onlyBorder ? borderBase : backgroundBase)}
  width: 42.5%;
  margin: 0.13em 0.13em 0.13em 0;
  padding: 0.45em 0.3em;
  border: 1px solid;
  border-color: ${choicer};
  border-radius: 0.25em;
  outline: none;
  transition: 0.3s;
  color: #fff;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 0.2em 0.11em ${choicer}79;
  }
`;
