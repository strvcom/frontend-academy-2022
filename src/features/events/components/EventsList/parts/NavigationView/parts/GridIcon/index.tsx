import type { FC } from 'react'

export const GridIcon: FC = (props) => {
  return (
    <svg
      width="17"
      height="13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6h5V0H0v6Zm0 7h5V7H0v6Zm6 0h5V7H6v6Zm6 0h5V7h-5v6ZM6 6h5V0H6v6Zm6-6v6h5V0h-5Z"
        fill="currentColor"
      />
    </svg>
  )
}
