import styled from 'styled-components'

import { mq } from '../../theme'
import { VerticalCenter } from '../VerticalCenter'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  text-align: center;

  ${mq.medium} {
    flex-direction: row;
    text-align: start;
  }
`

export const Main = styled(VerticalCenter).attrs({ as: 'main' })`
  position: relative;
`
