import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import { green } from 'logger'

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 200,
  },
})

const Phone = ({ classes, _id, handleUpdate, phoneNumber, phoneType }) => {
  return (
    <div key={_id}>
      <TextField
        className={classes.textField}
        label='Phone'
        name='phoneType'
        onChange={(e) => handleUpdate(e, _id)}
        type='text'
        value={phoneType}
      />
      <TextField
        label='Phone'
        name='phoneNumber'
        onChange={(e) => handleUpdate(e, _id)}
        type='text'
        value={phoneNumber}
      />
    </div>
  )
}

export default withStyles(styles)(Phone)
