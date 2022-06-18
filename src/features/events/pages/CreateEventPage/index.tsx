import type { NextPage } from 'next'
import Link from 'next/link'
import type { FormEvent } from 'react'

import { Routes } from '~/features/core/constants/routes'
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

export const CreateEventPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('TODO')
  }

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
          <form onSubmit={onSubmit}>
            <Input label="Title" type="text" name="title" />
            <Input label="Description" type="text" name="description" />
            <Input label="Date" type="date" name="date" />
            <Input label="Time" type="time" name="time" />
            <Input label="Capacity" type="number" name="capacity" />
            <SubmitButton accent="primary">Create New Event</SubmitButton>
          </form>
        </FormWrapper>
      </Container>
    </LayoutInternal>
  )
}
