import { getExampleValue } from '~/utils/example'

describe('[utils] example', function () {
  beforeAll(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(42)
  })

  afterAll(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  describe('example', () => {
    it('it works', () => {
      expect(getExampleValue()).toStrictEqual(42)
    })
  })
})
