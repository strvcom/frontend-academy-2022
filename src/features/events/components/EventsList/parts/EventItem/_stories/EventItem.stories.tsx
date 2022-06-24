import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import type { Props } from '~/features/events/components/EventsList/parts/EventItem'
import { EventItem } from '~/features/events/components/EventsList/parts/EventItem'
import { createEvent } from '~/features/events/types.fixtures'

export default {
  title: 'Events/Event Item',
  component: EventItem,
} as Meta

const Template: Story<Props> = (args) => <EventItem {...args} />

export const Grid = Template.bind({})
Grid.args = {
  event: createEvent(),
  isRow: false,
}

export const Row = Template.bind({})
Row.args = {
  event: createEvent(),
  isRow: true,
}
