import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { elevations } from '~/features/ui/theme/elevations'
import { typography } from '~/features/ui/theme/typography'

export const Article = styled.article`
  ${typography.paragraph.small}
  ${elevations[100]}
  padding: 3.2rem;
  border-radius: 2px;
  background-color: ${colors.background.light};
  color: ${colors.text.dimmed};
`

export const Title = styled.h4`
  ${typography.heading.h4}
  margin-bottom: 24px;
`

export const Chip = styled.div`
  ${typography.paragraph.small}
  display: inline-block;
  padding: 4px 10px;
  margin-bottom: 12px;
  margin-right: 12px;
  background: #d9dce1;
  border-radius: 15px;
`
