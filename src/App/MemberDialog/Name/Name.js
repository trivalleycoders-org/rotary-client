import React, {Fragment} from 'react'
import { red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import Avatar from 'elements/Avatar'
import Caption from 'elements/Caption'
import { VIEW, EDIT, CREATE } from 'App/const'
import Title from 'elements/Title'
import NameView from './NameView'
import NameCreate from './NameCreate'
import NameEdit from './NameEdit'
import { green, red as redl } from 'logger'

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
  const { firstName, lastName } = memberEditing
  if (action === VIEW) {
    return (
      <NameView
        classes={classes}
        firstName={firstName}
        lastName={lastName}
      />
    )
  } else if (action === EDIT) {
    return (
      <NameEdit
        classes={classes}
        firstName={firstName}
        handleUpdate={handleUpdate}
        lastName={lastName}
      />
    )
  } else if (action === CREATE) {
    return (
      <NameCreate
        classes={classes}
        firstName={firstName}
        handleUpdate={handleUpdate}
        lastName={lastName}
      />
    )
  } else {
    redl('ERROR Name.js', `Unknown action name '${action}'`)
  }
}

export default withStyles(styles)(Name)
