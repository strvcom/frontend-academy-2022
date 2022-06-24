import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { UserContextProvider } from '~/features/auth/contexts/userContext'
import { EventsList } from '~/features/events/components/EventsList'
import { EventFilterContextProvider } from '~/features/events/contexts/event-filter'
import { EventViewContextProvider } from '~/features/events/contexts/event-view'

const queryClient = new QueryClient()

export default {
  title: 'Events/Events List',
  component: EventsList,
} as Meta

const Template: Story = () => (
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <EventFilterContextProvider>
        <EventViewContextProvider>
          <EventsList />
        </EventViewContextProvider>
      </EventFilterContextProvider>
    </UserContextProvider>
  </QueryClientProvider>
)

export const Default = Template.bind({})
Default.args = {}
