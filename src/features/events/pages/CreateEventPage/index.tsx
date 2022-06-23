import { set as setTime } from 'date-fns'
import type { NextPage } from 'next'
import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'
import { useCreateEvent } from '~/features/events/hooks/useCreateEvent'
import { Input } from '~/features/ui/components/Input'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import {
  CloseLink,
  Container,
  Description,
  FormWrapper,
  StyledCloseIcon,
  SubmitButton,
  Title,
} from './styled'

import { useCreateEventForm, EVENT_MIN_DATE } from '../../lib/create-event-form'

export const CreateEventPage: NextPage = () => {
  const form = useCreateEventForm()
  const { mutate } = useCreateEvent()

  /**
   * Create event handler.
   */
  const handleSubmit = form.handleSubmit(({ date, time, ...rest }) => {
    const [hours, minutes] = time.split(':').map(Number)

    const startsAt = setTime(new Date(date), { hours, minutes }).toISOString()

    mutate({ startsAt, ...rest })
  })

  return (
    <LayoutInternal
      headerActionComponent={
        <Link href={Routes.DASHBOARD} passHref>
          <CloseLink>
            <StyledCloseIcon aria-hidden="true" /> Close
          </CloseLink>
        </Link>
      }
    >
      <Container>
        <FormWrapper>
          <Title>Create new event</Title>
          <Description>Enter details below.</Description>

          <form noValidate onSubmit={handleSubmit}>
            <Input
              label="Title"
              type="text"
              error={form.formState.errors.title?.message}
              {...form.register('title')}
            />
            <Input
              label="Description"
              type="text"
              error={form.formState.errors.description?.message}
              {...form.register('description')}
            />
            <Input
              label="Date"
              type="date"
              min={EVENT_MIN_DATE}
              error={form.formState.errors.date?.message}
              {...form.register('date')}
            />
            <Input
              label="Time"
              type="time"
              error={form.formState.errors.time?.message}
              {...form.register('time')}
            />
            <Input
              label="Capacity"
              type="number"
              min={1}
              error={form.formState.errors.capacity?.message}
              {...form.register('capacity')}
            />
            <SubmitButton disabled={form.formState.isSubmitting}>
              Create New Event
            </SubmitButton>
          </form>
        </FormWrapper>
      </Container>
    </LayoutInternal>
  )
}
