// @flow
import React, {Fragment} from 'react'
import { TextField } from '@material-ui/core'
import Avatar from 'elements/Avatar'
import { green } from 'logger'

type Params = {
  classes: {
    wrapper: string,
    avatar: string,
    textField: string,
  },
  firstName: string,
  handleUpdate: ({}, string) => void,
  lastName: string
}

const NameCreate = ({ classes, firstName, handleUpdate, lastName }: Params) => {
  return (
    <div className={classes.wrapper}>
      <Avatar className={classes.avatar}>HI</Avatar>
      <TextField
        className={classes.textField}
        label='First Name'
        name='firstName'
        onChange={(e) => handleUpdate(e, '')}
        type='text'
        value={firstName}
      />
      <TextField
        className={classes.textField}
        label='Last  Name'
        name='lastName'
        onChange={(e) => handleUpdate(e, '')}
        type='text'
        value={lastName}
      />
    </div>
  )
}

export default NameCreate
