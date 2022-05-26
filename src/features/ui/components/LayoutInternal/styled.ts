import { createGlobalStyle } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const InternalGlobalStyle = createGlobalStyle`
body {
  background-color: ${colors.background.dimmed};
}
`
