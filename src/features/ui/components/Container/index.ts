import styled from 'styled-components'

import * as theme from '../../theme'

export const Container = styled.div`
  --horizontal-spacing: 0.8rem;

  margin: 0 auto;
  padding: 0 var(--horizontal-spacing);
  max-width: calc(
    ${theme.ScreenSize.large / 10}rem + 2 * var(--horizontal-spacing)
  );
  width: 100%;

  ${theme.mq.medium} {
    --horizontal-spacing: 2rem;
  }

  ${theme.mq.large} {
    --horizontal-spacing: 4rem;
  }
`
