import styled from 'styled-components'

import { typography } from '~/features/ui/theme/typography'

export const Title = styled.h1`
  ${typography.heading.h2}
`
export const Description = styled.p`
  ${typography.paragraph.large}
  max-width: 30em;
  margin: 0.8rem 0 4rem;
`
