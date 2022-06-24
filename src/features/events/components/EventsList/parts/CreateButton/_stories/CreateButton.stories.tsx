import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { CreateButton } from '~/features/events/components/EventsList/parts/CreateButton'
import type { Props } from '~/features/events/components/EventsList/parts/EventItem'

export default {
  title: 'Events/Create Button',
  component: CreateButton,
} as Meta

const Template: Story<Props> = () => <CreateButton />

export const Default = Template.bind({})
Default.args = {}
