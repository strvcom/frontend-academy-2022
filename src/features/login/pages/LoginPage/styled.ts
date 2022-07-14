import styled from 'styled-components'

import { Button, theme } from '~/features/ui'

export const Title = styled.h1`
  ${theme.typography.heading.h2}
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
  ${theme.typography.paragraph.large}
  margin: 0.5rem 0;
`

// We are extending the Description component and adding addional styles to it
export const ErrorMessage = styled(Description)`
  color: ${theme.colors.accent.destructive};
`
