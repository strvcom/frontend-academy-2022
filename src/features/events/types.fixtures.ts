import { faker } from '@faker-js/faker'

import type { User } from '~/features/events'

export const createUser = () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
})

export const createEvent = (data?: {
  user?: User
  attendees?: User[]
  isPastEvent?: boolean
}) => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  createdAt: faker.date.past().toISOString(),
  startsAt: data?.isPastEvent
    ? faker.date.past().toISOString()
    : faker.date.future().toISOString(),
  capacity: faker.datatype.number({ min: 0, max: 10 }),
  owner: data?.user ?? createUser(),
  attendees:
    data?.attendees ??
    Array(10)
      .fill(0)
      .map(() => createUser()),
})
