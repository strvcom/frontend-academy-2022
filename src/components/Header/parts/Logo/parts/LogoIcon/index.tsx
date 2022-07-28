import type { FC } from 'react'

export const LogoIcon: FC = (props) => {
  return (
    <svg
      width="29"
      height="28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.078 27V.058H16.95v4.94H5.322v6.156h10.526v4.674H5.322v6.232H16.95V27H.078Zm21.47-3.192c0-.963.336-1.78 1.007-2.451.671-.671 1.488-1.007 2.451-1.007.481 0 .937.089 1.368.266a3.393 3.393 0 0 1 1.862 1.843c.177.418.266.868.266 1.349A3.419 3.419 0 0 1 26.374 27c-.43.177-.887.266-1.368.266-.963 0-1.78-.336-2.451-1.007-.671-.671-1.007-1.488-1.007-2.451Z"
        fill="currentColor"
      />
    </svg>
  )
}
