import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { createUser } from '~/features/events/types.fixtures'
import type {
  ComponentProps,
  ContainerProps,
} from '~/features/ui/components/Header'
import { HeaderComponent } from '~/features/ui/components/Header'

export default {
  title: 'UI/Header',
  component: HeaderComponent,
} as Meta

const Template: Story<ContainerProps & ComponentProps> = (args) => (
  <HeaderComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  user: undefined,
  isExternal: false,
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: createUser(),
  isExternal: false,
}

export const CustomComponent = Template.bind({})
CustomComponent.args = {
  user: createUser(),
  isExternal: false,
  actionComponent: <div>Custom Component</div>,
}
