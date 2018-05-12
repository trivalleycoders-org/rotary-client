import React from 'react'
// import styled from 'styled-components'
// import { tvcGreen } from '../../colors'
// import HorizontalLine from 'elements/HorizontalLine'
import Typography from 'material-ui/Typography'


const Caption = ({ children }) => {
  return (
    <Typography variant='caption' gutterBottom>
      {children}
    </Typography>
  )
}
export default Caption
