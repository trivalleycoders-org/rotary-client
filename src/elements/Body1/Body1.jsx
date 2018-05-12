import React from 'react'
// import styled from 'styled-components'
// import { tvcGreen } from '../../colors'
// import HorizontalLine from 'elements/HorizontalLine'
import Typography from 'material-ui/Typography'


const Body1 = ({ children }) => {
  return (
    <Typography variant='body1' gutterBottom>
      {children}
    </Typography>
  )
}
export default Body1
