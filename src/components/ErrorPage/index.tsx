import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '../../features/ui/components/Button'
import { Container } from '../../features/ui/components/Container'
import { LayoutExternal } from '../layouts/LayoutExternal'

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

export { ErrorPage }
