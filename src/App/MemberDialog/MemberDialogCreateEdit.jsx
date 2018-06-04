import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Phones from './Phones'
import Roles from './Roles'
import Name from './Name'
import Caption from 'elements/Caption'
import { Icon } from '@material-ui/core'
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

class MemberDialogCreateEdit extends Component {
  state = {
    validated: {
      name: false,
      email: false,
      phones: false,
      roles: false,
      comments: false,
    }
  }
  handleValidated = (e, controlName, validated) => {
    this.setState({
      [controlName]: validated
    })
  }
  render() {
    const { action, addPhone, classes, dirty, handleClose, handleSave, handleUpdate, memberEditing, open, openMemberId } = this.props
    return (
      <Dialog open={open}>
        <DialogTitle className={classes.title} id='dt-edit-member'>
          Create Member
          <Caption>ID: {openMemberId}</Caption>
        </DialogTitle>
        <DialogContent id='dc1' className={classes.content}>
          <Name
            action={action}
            handleUpdate={handleUpdate}
            // handleValidated={handleValidated}
            memberEditing={memberEditing}
          />

          <Email
            action={action}
            handleUpdate={handleUpdate}
            memberEditing={memberEditing}
          />
          <Phones
            action={action}
            addPhone={addPhone}
            handleUpdate={handleUpdate}
            phones={memberEditing.phones}
          />
          <Roles
            action={action}
            handleUpdate={handleUpdate}
            roles={memberEditing.roles}
          />
          <Comments
            action={action}
            handleUpdate={handleUpdate}
            memberEditing={memberEditing}
          />

        </DialogContent>
        <DialogActions>
          <Button
            color='primary'
            onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button
            color='primary'
            disabled={!dirty}
            onClick={(e) => handleSave(e)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(MemberDialogCreateEdit)
