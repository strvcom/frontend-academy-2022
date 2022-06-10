import styled, { css, keyframes } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

import { StyleReset } from '../StyleReset'

const padding = css`
  padding: 0.6rem 0;
`

export const InputWrapper = styled.div`
  margin: 1rem 0;
`

export const LabelText = styled.span`
  ${padding}
  display: block;
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  color: ${colors.text.formLabel};
  transition: 0.4s transform;
  transform-origin: 0 50%;
`

/*
  There is no need to add Styled* prefix to your styled components,
  here we are adding that just because we already have Input component as parent,
  so we need to avoid name conflict.
*/
export const StyledInput = styled.input`
  ${StyleReset}
  ${padding}
  display: block;
  width: 100%;
  outline: none;
  border-bottom: 1px solid ${colors.text.formLabel};
  transition: border-bottom-color 0.2s;

  &:focus {
    border-bottom-color: ${colors.accent.primary};
  }

  &::placeholder {
    opacity: 0;
  }

  &:focus + ${LabelText}, &:not(:placeholder-shown) + ${LabelText} {
    transform: translateY(-2.5rem) scale(0.8);
  }
`

const shake = keyframes`
  from { transform: none; }
  20%  { transform: translateX(-1.5rem); }
  40%  { transform: translateX(1.5rem); }
  60%  { transform: translateX(-1.5rem); }
  80%  { transform: translateX(1.5rem); }
  to   { transform: none; }
`

export const Label = styled.label<{ hasError?: boolean }>`
  display: block;
  position: relative;
  padding-top: 2rem;
  text-align: start;

  ${(props) =>
    props.hasError &&
    css`
      @media (prefers-reduced-motion: no-preference) {
        animation: 0.5s ${shake};
      }

      ${StyledInput} {
        border-bottom-color: ${colors.accent.destructive};
      }
    `}
`

export const ErrorMessage = styled.span`
  color: ${colors.accent.destructive};
`

export const PasswordToggle = styled.button.attrs({ type: 'button' })<{
  isActive: boolean
}>`
  ${StyleReset}
  position: absolute;
  top: 2rem;
  right: 0;
  font-size: 2.4rem;
  color: ${(props) =>
    props.isActive ? colors.accent.primary : colors.text.formLabel};
  cursor: pointer;
`
