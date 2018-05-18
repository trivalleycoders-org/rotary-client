import React from 'react'
import { TextField } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import Avatar from 'elements/Avatar'
import { Email as EmailIcon } from '@material-ui/icons'
import { VIEW } from 'App/const'
import { green } from 'logger'
import Caption from 'elements/Caption'
import Body1 from 'elements/Body1'

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
  viewWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap'
  }
})

const Email = ({ action, classes, children, handleUpdate, memberEditing }) => {
  const { email } = memberEditing
  if (action === VIEW) {
    return (
      <div className={classes.viewWrapper}>
        <EmailIcon className={classes.emailIcon}>email</EmailIcon>
        <Body1>{email}</Body1>
      </div>
    )
  } else {
    return (
      <div className={classes.wrapper}>
        <EmailIcon className={classes.emailIcon} />
        <TextField
          className={classes.emailField}
          label='Email'
          name='email'
          onChange={
            action !== VIEW
              ? (e) => handleUpdate(e)
              : null
          }
          type='text'
          value={memberEditing.email}
        />
      </div>
    )
  }
}

export default withStyles(styles)(Email)
