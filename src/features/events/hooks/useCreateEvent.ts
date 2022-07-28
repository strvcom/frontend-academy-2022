import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { privateApi } from '~/features/api'

type EventInput = {
  title: string
  description: string
  startsAt: string
  capacity: number
}

const useCreateEvent = () => {
  const router = useRouter()

  return useMutation<{ success: boolean }, Error, EventInput>(
    'createEvent',
    async (event) => {
      const response = await privateApi.post('/events', { json: event })

      if (!response.ok) {
        throw new Error('Creating Event Failed')
      }

      return { success: response.ok }
    },
    {
      onSuccess: () => {
        void router.push('/')
      },
    }
  )
}

export { useCreateEvent }
