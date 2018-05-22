// @flow
import React from 'react'
import { TextField } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import Avatar from 'elements/Avatar'
import { Icon } from '@material-ui/core'
import NotesIcon from '@material-ui/icons/Note'
import { VIEW } from 'App/const'
import Body1 from 'elements/Body1'
import { green } from 'logger'
import iNote from './media/ic_note_white_18dp.png'

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  icon: {
    margin: theme.spacing.unit * 2,
    width: '25px',
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingLeft: theme.spacing.unit,
  },
  viewText: {
    marginTop: theme.spacing.unit * 2,
  },
  viewWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-start',
  }
})

type Params = {
  action: string,
  classes: {
    viewWrapper: string,
    icon: string,
    textField: string,
    viewText: string,
    wrapper: string,
  },
  children: {},
  handleUpdate: ({}, string) => void,
  memberEditing: {
    comments: string
  },
}


const Comments = ({ action, classes, children, handleUpdate, memberEditing }: Params) => {
  const { comments } = memberEditing
  if (action === VIEW) {
    return (
      <div className={classes.viewWrapper}>
        <img className={classes.icon} src={iNote} /><span className={classes.viewText}><Body1>{comments}</Body1></span>
      </div>
    )
  } else {
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
          onChange={
            action !== VIEW
              ? (e) => handleUpdate(e, '')
              : null
          }
          // rows="4"
          value={comments}
         />
      </div>
    )
  }

}

export default withStyles(styles)(Comments)
