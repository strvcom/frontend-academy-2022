import { css } from 'styled-components'

export const elevations = {
  100: css`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  `,
  500: css`
    z-index: 500;
  `,
  900: css`
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.15);
    z-index: 900;
  `,
}
