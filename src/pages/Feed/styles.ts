import { styled } from 'styled-components';
import { IFeed } from './types';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 25px;

  color: #FFF;
`

export const TitleHighlight = styled.h3`
  color: #FFF7;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 25px;
`

export const Column = styled.div<IFeed>`
  flex:${({flex})=> flex};
  padding-right: 24px;
`