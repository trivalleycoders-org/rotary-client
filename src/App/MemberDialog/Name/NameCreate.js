import React, {Fragment} from 'react'
import { TextField } from '@material-ui/core'
import Avatar from 'elements/Avatar'
import { green } from 'logger'

const NameCreate = ({ classes, firstName, handleUpdate, lastName }) => {
  return (
    <div className={classes.wrapper}>
      <Avatar className={classes.avatar}>HI</Avatar>
      <TextField
        className={classes.textField}
        label='First Name'
        name='firstName'
        onChange={(e) => handleUpdate(e)}
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
