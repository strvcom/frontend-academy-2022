import styled from 'styled-components'

import { ScreenSize } from '~/features/ui/theme/mq'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 4rem;
  max-width: ${ScreenSize.large / 10}rem;
  box-sizing: content-box;
`
