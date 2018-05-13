import React from 'react'
import TextField from 'material-ui/TextField'
import red from 'material-ui/colors/red'
import { withStyles } from 'material-ui/styles'
import Avatar from 'elements/Avatar'
import Icon from 'material-ui/Icon'
import { green } from 'logger'

const styles = theme => ({
  emailField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 416,
  },
  emailIcon: {
    color: 'white',
    margin: theme.spacing.unit * 2,

  },
  icon: {
    margin: theme.spacing.unit * 2,
    with: '40px',
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

const Email = ({ classes, children, handleUpdate, memberEditing }) => {
  return (
    <div className={classes.wrapper}>
      <Icon className={classes.emailIcon}>email</Icon>
      <TextField
        className={classes.emailField}
        label='Email'
        name='email'
        onChange={(e) => handleUpdate(e)}
        type='text'
        value={memberEditing.email}
      />
    </div>
  )
}

export default withStyles(styles)(Email)