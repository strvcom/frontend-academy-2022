import styled from 'styled-components'

import { theme } from '~/features/ui'

export const Anchor = styled.a`
  ${theme.typography.paragraph.small}
  color: ${theme.colors.text.light};

  b {
    ${theme.typography.label.medium}
    color: ${theme.colors.text.dimmed};
    font-weight: 500;
  }
`
