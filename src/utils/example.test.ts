import { getExampleValue } from '~/utils/example'

it('it works', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(42)

  expect(getExampleValue()).toStrictEqual(42)

  jest.spyOn(global.Math, 'random').mockRestore()
})
