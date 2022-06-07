import type { FC } from 'react'

export const PlusIcon: FC = (props) => {
  return (
    <svg
      width="14"
      height="14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8H8v6H6V8H0V6h6V0h2v6h6v2Z"
        fill="currentColor"
      />
    </svg>
  )
}
