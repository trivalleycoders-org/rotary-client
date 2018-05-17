import React from 'react'
import { TextField } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import Avatar from 'elements/Avatar'
import { Icon } from '@material-ui/core'

import { green } from 'logger'

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingLeft: theme.spacing.unit,
  }
})

const Comments = ({ classes, children, handleUpdate, memberEditing }) => {
  return (
    <div className={classes.wrapper}>
      {/* <Icon className={classes.emailIcon}>email</Icon> */}

      <TextField
        className={classes.textField}
        fullWidth
        id="multiline-static"
        label="Comments"
        margin="normal"
        multiline
        name='comments'
        onChange={(e) => handleUpdate(e)}
        // rows="4"
        value={memberEditing.comments}
       />
    </div>
  )
}

export default withStyles(styles)(Comments)
