/* eslint-disable @typescript-eslint/no-unused-vars,import/no-extraneous-dependencies */
import { useArgs } from '@storybook/addons'
import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import type { Props } from '~/features/events/components/EventsList/parts/NavigationView'
import { NavigationView } from '~/features/events/components/EventsList/parts/NavigationView'
import { ViewType } from '~/features/events/contexts/event-view'

export default {
  title: 'Events/Navigation View',
  component: NavigationView,
} as Meta

const Template: Story<Props> = (args) => {
  const [__args, updateArgs] = useArgs()

  const handleChange = (ViewType: ViewType) => {
    updateArgs({
      ...args,
      activeView: ViewType,
    })
  }

  return <NavigationView onChange={handleChange} activeView={args.activeView} />
}

export const Default = Template.bind({})
Default.args = {
  activeView: ViewType.GRID,
}
