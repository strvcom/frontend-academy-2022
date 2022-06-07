import styled from 'styled-components'

export const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  /*
    We could remove &::before and &::after pseudo-elements and use just
    justify-content: center; instead. However, with these pseudo-elements,
    we get more control over the placement and push it a bit upwards
    to make it more centered optically.
  */
  &::before,
  &::after {
    content: '';
    display: block;
    flex: 3;
  }

  &::after {
    flex: 4;
  }
`
