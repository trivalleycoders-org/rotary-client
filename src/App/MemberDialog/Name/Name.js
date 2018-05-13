import React from 'react'
import TextField from 'material-ui/TextField'
import red from 'material-ui/colors/red'
import { withStyles } from 'material-ui/styles'
import Avatar from 'elements/Avatar'
import { green } from 'logger'

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
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
  return (
    <div className={classes.wrapper}>
      <Avatar>HI</Avatar>
      <TextField
        className={classes.textField}
        label='First Name'
        name='firstName'
        onChange={(e) => this.handleUpdate(e)}
        type='text'
        value={memberEditing.firstName}
      />
      <TextField
        className={classes.textField}
        label='Last  Name'
        name='lastName'
        onChange={(e) => this.handleUpdate(e)}
        type='text'
        value={memberEditing.lastName}
      />
    </div>
  )
}

export default withStyles(styles)(Name)
