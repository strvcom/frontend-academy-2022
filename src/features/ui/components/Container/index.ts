import styled from 'styled-components'

import { mq, ScreenSize } from '~/features/ui/theme/mq'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 0.8rem;
  max-width: ${ScreenSize.large / 10}rem;
  box-sizing: content-box;

  ${mq.medium} {
    padding: 0 2rem;
  }

  ${mq.large} {
    padding: 0 4rem;
  }
`
