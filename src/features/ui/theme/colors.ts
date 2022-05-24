import { palette } from './palette'

export const colors = {
  text: {
    base: palette.grey[100],
    dimmed: palette.grey[500],
    light: palette.grey[800],
    inverted: palette.white,
  },
  background: {
    light: palette.white,
    dimmed: palette.grey[900],
    dark: palette.grey[100],
  },
  accent: {
    primary: palette.green,
    primaryHover: palette.greenDarker,
    destructive: palette.pink,
    destructiveHover: palette.pinkDarker,
  },
}
