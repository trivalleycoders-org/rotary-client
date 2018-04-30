import React from 'react'
import styled from 'styled-components'
import { tvcGreen } from '../../colors'
import HorizontalLine from 'elements/HorizontalLine'

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 20px;
`
const H = styled.h1`
  color: ${props => tvcGreen};
  margin-bottom: 8px
`
//
const H1 = ({ children }) => {
  return (
    <Wrapper>
      <H>{children}</H>
      <HorizontalLine />
    </Wrapper>
  )
}
export default H1
