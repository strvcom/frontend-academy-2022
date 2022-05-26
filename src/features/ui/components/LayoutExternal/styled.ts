import styled from 'styled-components'

import { mq } from '~/features/ui/theme/mq'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100%;
  text-align: center;

  ${mq.medium} {
    flex-direction: row;
    text-align: start;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 0 2rem;

  ${mq.medium} {
    padding: 4rem;
  }

  /*
    We could remove &::before and &::after pseudo-elements and use just
    justify-content: center; instead. However, with these pseudo-elements,
    we get more control over the placement and push it a bit upwards
    to make it more centered optically.
  */
  &::before,
  &::after {
    content: '';
    display: block;
    flex: 3;
  }

  &::after {
    flex: 4;
  }
`
