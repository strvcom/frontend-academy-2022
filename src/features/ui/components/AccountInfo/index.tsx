import type { UserType } from '~/features/auth'
import { useUserContext } from '~/features/auth'

import { InitialsButton, User, Wrapper } from './styled'

export interface IProps {
  user: UserType
}

export const AccountInfo = ({ user }: IProps) => {
  const initials = user.firstName[0] + user.lastName[0]
  const { handleLogout } = useUserContext()

  return (
    <Wrapper>
      <InitialsButton>{initials}</InitialsButton>
      <User>
        {user.firstName} {user.lastName}
      </User>
      {/* shortcut */}
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </Wrapper>
  )
}
