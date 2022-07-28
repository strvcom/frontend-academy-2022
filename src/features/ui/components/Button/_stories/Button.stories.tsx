import { action } from '@storybook/addon-actions'
import type { ButtonProps } from '@storybook/components'
import type { Story, Meta } from '@storybook/react/types-6-0'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

import { Button } from '../'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      defaultValue: 'small',
    },
    accent: {
      control: 'select',
      options: ['normal', 'primary', 'destructive'],
      defaultValue: 'normal',
    },
  },
} as Meta

const Template: Story<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = (
  args
) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'click me',
  onClick: action('clicked'),
}
