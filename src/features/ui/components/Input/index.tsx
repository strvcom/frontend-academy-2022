import type { FC, InputHTMLAttributes } from 'react'
import { forwardRef, useState } from 'react'

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
    const [isPasswordShown, togglePassword] = useState(false)
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
              onClick={() => togglePassword(!isPasswordShown)}
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
