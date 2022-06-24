/* eslint-disable @typescript-eslint/no-unused-vars,import/no-extraneous-dependencies */
import { useArgs } from '@storybook/addons'
import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import type { Props } from '~/features/events/components/EventsList/parts/NavigationFilter'
import { NavigationFilter } from '~/features/events/components/EventsList/parts/NavigationFilter'
import { FilterType } from '~/features/events/contexts/event-filter'

export default {
  title: 'Events/Navigation Filter',
  component: NavigationFilter,
} as Meta

const Template: Story<Props> = (args) => {
  const [__args, updateArgs] = useArgs()

  const handleChange = (filterType: FilterType) => {
    updateArgs({
      ...args,
      activeFilter: filterType,
    })
  }

  return (
    <NavigationFilter
      onChange={handleChange}
      activeFilter={args.activeFilter}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  activeFilter: FilterType.ALL,
}
