// @flow
import React from 'react'
import { Typography } from '@material-ui/core'
import { green } from 'logger'

type Params = {
  children: {},
  noGutter: any,
}
const Body1 = ({ children, noGutter }: Params) => {
  return (
    <Typography variant='body1' gutterBottom={!noGutter}>
      {children}
    </Typography>
  )
}
export default Body1
