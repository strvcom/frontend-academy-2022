import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const Anchor = styled.a`
  ${typography.paragraph.small}
  color: ${colors.text.light};

  b {
    ${typography.label.medium}
    color: ${colors.text.dimmed};
    font-weight: 500;
  }
`
