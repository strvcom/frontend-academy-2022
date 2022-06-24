import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { EventsListComponent } from '~/features/events/components/EventsList/EventsList'
import type { Props } from '~/features/events/components/EventsList/EventsList'
import { EventFilterContextProvider } from '~/features/events/contexts/event-filter'
import { EventViewContextProvider } from '~/features/events/contexts/event-view'
import { createEvent } from '~/features/events/types.fixtures'

export default {
  title: 'Events/Events List/Component',
  component: EventsListComponent,
} as Meta

const Template: Story<Props> = (args) => (
  <EventFilterContextProvider>
    <EventViewContextProvider>
      <EventsListComponent {...args} />
    </EventViewContextProvider>
  </EventFilterContextProvider>
)

export const Component = Template.bind({})
Component.args = {
  isLoading: false,
  events: [createEvent(), createEvent({ isPastEvent: true }), createEvent()],
}
