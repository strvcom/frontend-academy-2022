import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { EventFilterContextProvider } from '../../../contexts/event-filter'
import { EventViewContextProvider } from '../../../contexts/event-view'
import { createEvent } from '../../../types.fixtures'
import { EventsListComponent } from '../EventsList'
import type { Props } from '../EventsList'

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
