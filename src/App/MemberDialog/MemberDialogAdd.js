import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Phones from './Phones'
import Roles from './Roles'
import Name from './Name'
import Caption from 'elements/Caption'
import { Icon } from '@material-ui/core'
import { CREATE } from 'App/const'
import Email from './Email'
import Comments from './Comments'
import { red, grey } from '@material-ui/core/colors'
import { green } from 'logger'

const styles = theme => ({
  content: {
    paddingTop: '10px',
  },
  title: {
    backgroundColor: grey[700],
    padding: '25px',
  },
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
})

const MemberDialog = ({ classes, dirty, handleClose, handleCloseClick, handleSaveClick, handleUpdate, member, memberEditing, open, openMemberId }) => {

  return (
    <Dialog open={open}>
      <DialogTitle className={classes.title} id='dt-edit-member'>
        Add Member
        <Caption>ID: {openMemberId}</Caption>
      </DialogTitle>
      <DialogContent className={classes.content}>
        <Name
          handleUpdate={handleUpdate}
          memberEditing={memberEditing}
          action={CREATE}
        />

        <Email
          handleUpdate={handleUpdate}
          memberEditing={memberEditing}
          action={CREATE}
        />
        <Phones
          handleUpdate={handleUpdate}
          phones={memberEditing.phone}
          action={CREATE}
        />
        <Roles
          handleUpdate={handleUpdate}
          roles={memberEditing.roles}
          action={CREATE}
        />
        <Comments
          handleUpdate={handleUpdate}
          memberEditing={memberEditing}
          action={CREATE}
        />

      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          onClick={() => handleCloseClick()}>
          Cancel
        </Button>
        <Button
          color='primary'
          disabled={!dirty}
          onClick={(e, memberEditing) => handleSaveClick(e, memberEditing)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )

}

export default withStyles(styles)(MemberDialog)
