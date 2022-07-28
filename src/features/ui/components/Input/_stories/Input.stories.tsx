import type { Story, Meta } from '@storybook/react/types-6-0'
import React, { useEffect, useState } from 'react'

import { Input } from '../'

type StoryProps = { label: string; hasError: boolean }

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    error: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<StoryProps> = ({ label, hasError }) => {
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (hasError) {
      setError('Something is wrong 🤯')
    } else {
      setError(undefined)
    }
  }, [hasError])

  return <Input label={label} error={error} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Input Label',
  hasError: false,
}
