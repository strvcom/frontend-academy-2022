import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

import {
  InputWrapper,
  Label,
  LabelText,
  PasswordToggle,
  StyledInput,
} from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export const Input: FC<Props> = ({ label, name, type, error, ...rest }) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <InputWrapper>
      <Label hasError={Boolean(error)} key={error}>
        <StyledInput
          placeholder={label}
          name={name}
          type={inputType}
          {...rest}
        />
        <LabelText>{label}</LabelText>
        {type === 'password' && (
          <PasswordToggle
            isActive={isPasswordShown}
            onClick={() => togglePassword(!isPasswordShown)}
            aria-label="Display password text"
          >
            👁
          </PasswordToggle>
        )}
      </Label>
    </InputWrapper>
  )
}

Input.defaultProps = {
  error: '',
}
