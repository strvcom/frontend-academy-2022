import { useState } from 'react'

import { getExampleValue } from '~/utils/example'

export const useExampleValue = () => {
  const [exampleValue, setExampleValue] = useState(getExampleValue)

  return { exampleValue, setExampleValue }
}
