import { renderHook } from '@testing-library/react-hooks'

import { useExampleValue } from '~/utils/hooks/useExampleValue'

it('it works', () => {
  const { result } = renderHook(() => useExampleValue())

  // You can also use jest-extended
  // https://github.com/jest-community/jest-extended#number
  expect(typeof result.current.exampleValue).toBe('number')
})
