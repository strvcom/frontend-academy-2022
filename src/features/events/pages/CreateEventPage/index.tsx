import type { NextPage } from 'next'
import Link from 'next/link'
import type { FormEvent } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { Input } from '~/features/ui/components/Input'
import { Layout } from '~/features/ui/components/Layout'

export const CreateEventPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

  return (
    <Layout>
      <Link href={Routes.DASHBOARD}>X Close</Link>
      <h1>Create new event</h1>
      <p>Enter details below.</p>
      <form onSubmit={onSubmit}>
        <Input label="Title" type="text" name="title" />
        <Input label="Description" type="text" name="description" />
        <Input label="Date" type="date" name="date" />
        <Input label="Time" type="time" name="time" />
        <Input label="Capacity" type="number" name="capacity" />
        <button type="submit">Create New Event</button>
      </form>
    </Layout>
  )
}
