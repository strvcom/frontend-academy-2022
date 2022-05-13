import { useState } from 'react'

export const useExampleValue = () => {
  const [exampleValue, setExampleValue] = useState(0)

  return { exampleValue, setExampleValue }
}
