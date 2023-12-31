import { css, styled } from "styled-components";
import { IButtonStyledProps } from "./types";

export const ButtonContainer = styled.button<IButtonStyledProps>`
  background-color: #565656;
  border-radius: 22px;
  border: none;
  position: relative;

  color: #FFF;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  ${({variant})=> variant !== 'primary' && css`
    min-width: 167px;
    height: 33px;

    background: #E41050;

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #E41050;
      top: -5px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
    }
  `}
`