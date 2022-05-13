import type { FC, ReactNode } from 'react'

interface ILayout {
  topElement: ReactNode | ReactNode[] | null
  children: ReactNode | ReactNode[] | null
  bottomElement: ReactNode | ReactNode[] | null
}

export const Layout: FC<ILayout> = ({
  topElement,
  children,
  bottomElement,
}) => (
  <>
    {topElement}
    {children}
    {bottomElement}
  </>
)
