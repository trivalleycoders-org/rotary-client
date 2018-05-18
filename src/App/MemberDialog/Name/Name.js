import React, {Fragment} from 'react'
import { TextField } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import Avatar from 'elements/Avatar'
import Caption from 'elements/Caption'
import { VIEW } from 'App/const'
import Title from 'elements/Title'
import { green } from 'logger'

const styles = theme => ({
  avatar: {
    color: 'green',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 200,
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
  }
})

const Name = ({ action, classes, handleUpdate, memberEditing }) => {
  // green('Name: handleUpdate', handleUpdate)
  const { firstName, lastName } = memberEditing

    green('first', firstName[0])

    if (action = VIEW) {
      return (
        <div className={classes.title}>
          <Avatar
            className={classes.avatar}
            >
              {firstName[0]}{lastName[0]}
          </Avatar>
          <Title noGutter>{firstName} {lastName}</Title>

        </div>
      )
    } else {
      return (
        <div className={classes.wrapper}>
          <Avatar className={classes.avatar}>HI</Avatar>
          <TextField
            className={classes.textField}
            label='First Name'
            name='firstName'
            onChange={
              action !== VIEW
                ? (e) => handleUpdate(e)
                : null
              }
            type='text'
            value={firstName}
          />
          <TextField
            className={classes.textField}
            label='Last  Name'
            name='lastName'
            onChange={
              action !== VIEW
                ? (e) => handleUpdate(e, '')
                : null
            }
            type='text'
            value={lastName}
          />
        </div>
      )
    }


}

export default withStyles(styles)(Name)
