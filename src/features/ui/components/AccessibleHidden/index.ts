import { css } from 'styled-components'

// Helper style to hide an HTML element
// while keeping accessible to screen readers.
// Adding opacity: 0; would keep the component visible to
// Firefox' Accessibility tab, but not Chrome's screen reader extension.
export const AccessibleHidden = css`
  opacity: 0.001;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`
