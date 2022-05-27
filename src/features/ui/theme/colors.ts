import { palette } from './palette'

export const colors = {
  text: {
    base: palette.grey[100],
    dimmed: palette.grey[500],
    light: palette.grey[700],
    formLabel: palette.grey[800],
    tabs: palette.grey[600],
    inverted: palette.white,
    inactive: palette.grey[600],
    silent: palette.grey[850],
  },
  background: {
    light: palette.white,
    dimmed: palette.grey[900],
    dark: palette.grey[100],
    inactive: palette.grey[850],
  },
  accent: {
    primary: palette.green,
    primaryHover: palette.greenDarker,
    destructive: palette.pink,
    destructiveHover: palette.pinkDarker,
  },
}
