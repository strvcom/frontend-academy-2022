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
