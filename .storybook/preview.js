import { GlobalStyle } from '../src/features/ui/theme/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withStyles = (Story, context) => (
  <>
    <GlobalStyle />
    <Story {...context} />
  </>
)

export const decorators = [withStyles]
