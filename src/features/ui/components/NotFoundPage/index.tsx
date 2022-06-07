import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '~/features/ui/components/Button'
import { Container } from '~/features/ui/components/Container'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { HeadImage } from './parts/HeadImage'
import { Description, Title } from './styled'

export const NotFoundPage: NextPage = () => (
  <LayoutExternal>
    <HeadImage />
    <div>
      <Container>
        <Title>404 Error - page not found</Title>
        <Description>
          Seems like Darth Vader just hits our website and drops it down. Please
          press the refresh button and everything should be fine again.{' '}
        </Description>

        <Link href="/" passHref>
          <Button as="a">Refresh</Button>
        </Link>
      </Container>
    </div>
  </LayoutExternal>
)
