import styled from 'styled-components'

import * as theme from '../../../../theme'

export const Anchor = styled.a`
  ${theme.typography.paragraph.small}
  color: ${theme.colors.text.light};

  b {
    ${theme.typography.label.medium}
    color: ${theme.colors.text.dimmed};
    font-weight: 500;
  }
`
