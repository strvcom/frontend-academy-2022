import styled, { keyframes } from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { Container as ContainerBase } from '~/features/ui/components/Container'
import { colors } from '~/features/ui/theme/colors'
import { elevations } from '~/features/ui/theme/elevations'
import { typography } from '~/features/ui/theme/typography'

import { CloseIcon } from './parts/LogoIcon'

export const Container = styled(ContainerBase)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`

export const FormWrapper = styled.div`
  ${elevations[100]}
  width: 100%;
  max-width: 48rem;
  padding: 4rem 3.2rem;
  margin: 0 auto;
  border-radius: 2px;
  text-align: center;
  background-color: ${colors.background.light};
`

export const Title = styled.h1`
  ${typography.heading.h2}
`

export const Desctiption = styled.p`
  ${typography.paragraph.large}
`

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})`
  margin-top: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
`

export const StyledCloseIcon = styled(CloseIcon)``

const closeIconAnimation = keyframes`
  from {transform: none;}
  40% {transform: scale(0.7);}
  to   {transform: none;}
`

export const CloseLink = styled.a`
  ${typography.paragraph.normal}
  color: ${colors.text.base};

  ${StyledCloseIcon} {
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.14em;
  }

  &:hover,
  &:focus-visible {
    ${StyledCloseIcon} {
      animation: 0.4s ${closeIconAnimation};
    }
  }
`
