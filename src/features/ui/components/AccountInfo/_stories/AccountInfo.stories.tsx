import type { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { createUser } from '~/features/events/types.fixtures'
import type { IProps } from '~/features/ui/components/AccountInfo'
import { AccountInfo } from '~/features/ui/components/AccountInfo'

export default {
  title: 'UI/Account Info',
  component: AccountInfo,
} as Meta

const Template: Story<IProps> = (args) => <AccountInfo {...args} />

export const Default = Template.bind({})
Default.args = {
  user: createUser(),
}
