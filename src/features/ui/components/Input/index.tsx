import type { FC, InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { useToggle } from '~/utils/hooks/useToggle'

import { EyeIcon } from './parts/EyeIcon'
import {
  InputWrapper,
  Label,
  LabelText,
  ErrorMessage,
  PasswordToggle,
  StyledInput,
} from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string | null
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ label, name, type, error, ...rest }, ref) => {
    const [isPasswordShown, togglePasswordShown] = useToggle(false)
    const inputType = isPasswordShown ? 'text' : type

    return (
      <InputWrapper>
        <Label hasError={Boolean(error)}>
          <StyledInput
            placeholder={label}
            name={name}
            type={inputType}
            {...rest}
            ref={ref}
          />

          <LabelText>{label}</LabelText>

          {type === 'password' && (
            <PasswordToggle
              isActive={isPasswordShown}
              onClick={togglePasswordShown}
              aria-label="Display password text"
            >
              <EyeIcon />
            </PasswordToggle>
          )}

          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </Label>
      </InputWrapper>
    )
  }
)

Input.displayName = 'Input'
