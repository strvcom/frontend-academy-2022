import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { UserIcon } from './parts/UserIcon'
import {
  Article,
  CountWrapper,
  Count,
  Description,
  Name,
  Title,
  EditButton,
} from './styled'

type Props = {
  isRow: boolean
  title: string
  buttonText: string
}

const generateSlug = (text: string) => {
  /* eslint-disable require-unicode-regexp */
  const searchRegExp = new RegExp('/s/g')
  const replaceWith = '-'
  return text.replace(searchRegExp, replaceWith).toLocaleLowerCase()
}

export const EventItem: FC<Props> = ({ isRow, title, buttonText }) => {
  const slug = generateSlug(title)

  return (
    <Article isRow={isRow}>
      <time>April 4, 2017 – 2:17 PM</time>
      <Link href={Routes.EVENT_DETAIL + slug} passHref>
        <Title>{title}</Title>
      </Link>
      <Name>Tom Watts</Name>
      <Description>I will show you how to get angry in a second</Description>
      <CountWrapper>
        <UserIcon />
        <Count>
          9 <span>of</span> 20
        </Count>
      </CountWrapper>
      <EditButton>{buttonText}</EditButton>
    </Article>
  )
}
