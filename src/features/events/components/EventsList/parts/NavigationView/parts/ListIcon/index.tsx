import type { FC } from 'react'

export const ListIcon: FC = (props) => {
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
        d="M0 13h17V7H0v6ZM0 0v6h17V0H0Z"
        fill="currentColor"
      />
    </svg>
  )
}
