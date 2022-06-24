import { listBuilders } from '~/features/events/hooks/useEvents'
import type { Event } from '~/features/events/types'

describe('[hooks] useEvents', () => {
  describe('listBuilders', () => {
    describe('ALL', () => {
      it('should return events in ascending order', () => {
        // 1 ARRANGE
        const events = [
          { startsAt: '2020-01-03T00:00:00.000Z' },
          { startsAt: '2020-01-01T00:00:00.000Z' },
          { startsAt: '2020-01-02T00:00:00.000Z' },
        ] as Event[]

        // 2 ACT
        const sortedEvents = listBuilders.ALL(events)

        // 3 ASSERT
        expect(sortedEvents).toEqual([
          { startsAt: '2020-01-01T00:00:00.000Z' },
          { startsAt: '2020-01-02T00:00:00.000Z' },
          { startsAt: '2020-01-03T00:00:00.000Z' },
        ])
      })

      describe('when no events', () => {
        it('should return empty array', () => {
          const events = [] as Event[]

          const sortedEvents = listBuilders.ALL(events)

          expect(sortedEvents).toEqual([])
        })
      })
    })
  })
})
