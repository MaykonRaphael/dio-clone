import { styled } from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  max-width: 275px;
  border-bottom: 1px solid #383450;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const ItemContainer = styled.div`
  margin-right: 10px;
`

export const InputText = styled.input`
  flex: 1;
  background: transparent;
  color: #FFF;
  border: none;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #E83F5B;
  font-size: 12px;
`