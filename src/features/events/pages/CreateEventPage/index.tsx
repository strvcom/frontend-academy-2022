import { yupResolver } from '@hookform/resolvers/yup'
import { format } from 'date-fns'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

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

const minDate = new Date().toISOString().split('T')[0]
const minDateFormatted = format(new Date(minDate), 'dd/MM/yyyy')

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    date: yup
      .date()
      .typeError('date is a required field')
      .min(minDate, `value must be ${minDateFormatted} or later`)
      .required(),
    time: yup
      .string()
      // custom validation
      .matches(/\d+:\d+/u, 'time must be in format HH:MM')
      .required(),
    capacity: yup
      .number()
      .typeError('capacity must be an number')
      .min(1)
      .required(),
  })
  .required()

type FormInputs = yup.InferType<typeof schema>

export const CreateEventPage: NextPage = () => {
  const onSubmit = (data: FormInputs) => {
    // Temporarily show submitted data in the console
    console.log({ data })

    alert('TODO')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            // Disable native form validation
            noValidate
          >
            <Input
              label="Title"
              type="text"
              {...register('title')}
              error={errors?.title?.message}
            />
            <Input
              label="Description"
              type="text"
              {...register('description')}
              error={errors?.description?.message}
            />
            <Input
              label="Date"
              type="date"
              min={minDate}
              {...register('date')}
              error={errors?.date?.message}
            />
            <Input
              label="Time"
              type="time"
              {...register('time')}
              error={errors?.time?.message}
            />
            <Input
              label="Capacity"
              type="number"
              min={1}
              {...register('capacity')}
              error={errors?.capacity?.message}
            />
            <SubmitButton accent="primary">Create New Event</SubmitButton>
          </form>
        </FormWrapper>
      </Container>
    </LayoutInternal>
  )
}
