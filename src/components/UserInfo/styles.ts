import { styled } from 'styled-components';
import { IUserInfoStyled } from './types';

export const Container = styled.div`
  display: flex;
  margin-bottom: 24px;
`

export const NameText = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`

export const Progress = styled.div<IUserInfoStyled>`
  width: 180px;
  height: 6px;
  background-color: #FFF;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23DD7A;
  }
`