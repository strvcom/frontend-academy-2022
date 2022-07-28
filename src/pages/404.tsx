import { ErrorPage } from '~/components/ErrorPage'

const NotFoundPage = () => (
  <ErrorPage
    title="404 Error - page not found"
    desc={`Seems like Darth Vader just hits our website and drops it down.\n Please press the refresh button and everything should be fine again.`}
    redirectTo="/"
    linkLabel="Go to homepage"
  />
)

export default NotFoundPage
