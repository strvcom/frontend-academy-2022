import type { NextPage } from 'next'

import { LayoutInternal } from '~/components/layouts/LayoutInternal'
import { Container } from '~/features/ui'

import { EventsList } from '../../components/EventsList'
import { CreateButton } from '../../components/EventsList/parts/CreateButton'

import { H1, H2 } from './styled'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Container>
      <H1>Dashboard</H1>
      <section>
        <H2>Events List</H2>
        <EventsList />
        <CreateButton />
      </section>
    </Container>
  </LayoutInternal>
)
