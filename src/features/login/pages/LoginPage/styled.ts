import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const Title = styled.h1`
  ${typography.heading.h2}
  margin: 0;
`

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})``

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 56rem;

  > form,
  ${SubmitButton} {
    margin-top: 4rem;
  }
`

export const Description = styled.p`
  ${typography.paragraph.large}
  margin: 0.5rem 0;
`

export const ErrorMessage = styled(Description)`
  color: ${colors.accent.destructive};
`
