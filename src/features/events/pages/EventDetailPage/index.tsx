import type { NextPage } from 'next'

import { Container } from '~/features/ui/components/Container'
import { EventItem } from '~/features/ui/components/EventItem'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { Attendees } from './parts/Attendees'
import { H1, Section } from './styled'

export const EventDetailPage: NextPage = () => {
  return (
    <LayoutInternal>
      <Container>
        <H1>DETAIL EVENT: #9876543456GDT54DH5</H1>
        <Section>
          <EventItem isRow={false} title="How to get angry" buttonText="Join" />
          <Attendees />
        </Section>
      </Container>
    </LayoutInternal>
  )
}
