import React from 'react'
import { TableCell } from '@material-ui/core'

const Cell = ({ children, cellClick }) => {
  return (
    <TableCell onClick={(e) => cellClick(e)}>{children}</TableCell>
  )
}

export default Cell
