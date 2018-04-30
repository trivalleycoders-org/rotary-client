import React from 'react'
import styled from 'styled-components'
import iReduxFlow from './media/redux-flow-10.png'

const Img = styled.img`
  max-width: 100%;
  height: auto;
`
const ReduxFlow = () => {
  return (
    <div className='container-fluid'>
      <Img className="img-fluid" src={iReduxFlow} alt='redux flow' />
    </div>
  )
}
export default ReduxFlow