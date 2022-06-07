export type Event = {
  id: string
  title: string
  description: string
  createdAt: string
  startsAt: string
  capacity: number
  owner: User
  attendees: User[]
}

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
}
