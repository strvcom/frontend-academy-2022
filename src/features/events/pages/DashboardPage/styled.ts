import styled from 'styled-components'

import { AccessibleHidden } from '~/features/ui/components/AccessibleHidden'

export const H1 = styled.h1`
  ${AccessibleHidden}
`

export const H2 = styled(H1).attrs({ as: 'h2' })``
