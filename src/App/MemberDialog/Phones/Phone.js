import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import Icon from 'material-ui/Icon'
import { green } from 'logger'

const styles = theme => ({
  icon: {
    color: 'white',
    // margin: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
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
      <Icon className={classes.icon}>phone</Icon>
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
