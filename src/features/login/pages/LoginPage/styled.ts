import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

export const Title = styled.h1`
  ${typography.heading.h2}
`

// To not have <SubmitButton type="submit" … />, we are passing
// this prop right here to simplify the code in the main component
export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})``

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;

  > form,
  ${SubmitButton} {
    margin-top: 4rem;
  }
`

export const Description = styled.p`
  ${typography.paragraph.large}
  margin: 0.5rem 0;
`

// We are extending the Description component and adding addional styles to it
export const ErrorMessage = styled(Description)`
  color: ${colors.accent.destructive};
`
