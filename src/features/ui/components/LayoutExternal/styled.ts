import styled from 'styled-components'

import { VerticalCenter } from '~/features/ui/components/VerticalCenter'
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

export const Main = styled(VerticalCenter).attrs({ as: 'main' })`
  position: relative;
`
