import React from 'react'
import TextField from 'material-ui/TextField'
import red from 'material-ui/colors/red'
import { withStyles } from 'material-ui/styles'
import Avatar from 'elements/Avatar'
import { green } from 'logger'

const styles = theme => ({
  avatar: {
    color: 'green',
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 200,
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap'
  }
})

const Name = ({ classes, handleUpdate, memberEditing }) => {
  // green('Name: handleUpdate', handleUpdate)
  return (
    <div className={classes.wrapper}>
      <Avatar className={classes.avatar}>HI</Avatar>
      <TextField
        className={classes.textField}
        label='First Name'
        name='firstName'
        onChange={(e) => handleUpdate(e)}
        type='text'
        value={memberEditing.firstName}
      />
      <TextField
        className={classes.textField}
        label='Last  Name'
        name='lastName'
        onChange={(e) => handleUpdate(e, '')}
        type='text'
        value={memberEditing.lastName}
      />
    </div>
  )
}

export default withStyles(styles)(Name)
