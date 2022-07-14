import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '../Button'
import { Container } from '../Container'
import { LayoutExternal } from '../LayoutExternal'

import { HeadImage } from './parts/HeadImage'
import { Description, Title } from './styled'

type Props = {
  title: string
  desc: string
  redirectTo: string
  linkLabel: string
}

const ErrorPage: NextPage<Props> = ({ title, desc, redirectTo, linkLabel }) => {
  return (
    <LayoutExternal>
      <HeadImage />
      <div>
        <Container>
          <Title>{title}</Title>
          <Description>{desc}</Description>

          <Link href={redirectTo} passHref>
            <Button as="a">{linkLabel}</Button>
          </Link>
        </Container>
      </div>
    </LayoutExternal>
  )
}

const NotFoundPage = () => (
  <ErrorPage
    title="404 Error - page not found"
    desc={`Seems like Darth Vader just hits our website and drops it down.\n Please press the refresh button and everything should be fine again.`}
    redirectTo="/"
    linkLabel="Go to homepage"
  />
)

const ServerErrorPage = () => (
  <ErrorPage
    title="Something went wrong."
    desc={`Seems like Darth Vader just hits our website and drops it down.\n Please press the refresh button and everything should be fine again.`}
    redirectTo="" // empty to reload
    linkLabel="Refresh"
  />
)

export { ServerErrorPage, NotFoundPage }
