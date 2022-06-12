/* eslint-disable @next/next/no-document-import-in-page */
import type * as NextDocumentTypes from 'next/document'
import NextDocument from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type TDocument = React.ComponentType<NextDocumentTypes.DocumentProps> & {
  getInitialProps?: (
    ctx: NextDocumentTypes.DocumentContext
  ) => Promise<NextDocumentTypes.DocumentInitialProps>
}

/**
 * A Higher-Order Component to add Server-Side Rendering capabilities
 * to a Next.js Document (_document.tsx) component.
 */
const withServerSideStyles = (document: TDocument) => {
  // Resolve getInitialProps either from the custom document, or from Next.js' default.
  const getInitialProps =
    // eslint-disable-next-line @typescript-eslint/unbound-method
    document.getInitialProps ?? NextDocument.getInitialProps

  // Implement getInitialProps on behalf of document.
  document.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await getInitialProps(ctx)
      const styles = [initialProps.styles, sheet.getStyleElement()]

      return { ...initialProps, styles }
    } finally {
      sheet.seal()
    }
  }

  return document
}

export { withServerSideStyles }
