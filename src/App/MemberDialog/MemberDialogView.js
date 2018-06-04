import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button, IconButton } from '@material-ui/core'
import Phones from './Phones'
import Roles from './Roles'
import Name from './Name'
import Caption from 'elements/Caption'
import { Icon } from '@material-ui/core'
import { VIEW } from 'App/const'
import Email from './Email'
import Comments from './Comments'
import { red, grey } from '@material-ui/core/colors'
import StarIcon from '@material-ui/icons/Star'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { green } from 'logger'


const styles = theme => ({
  content: {
    paddingTop: '10px',
  },
  title: {
    backgroundColor: grey[700],
    padding: '25px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    // margin: theme.spacing.unit * 2,
    color: 'white',
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

const MemberDialogView = ({ classes, dirty, handleClose, handleCloseClick, handleSaveClick, handleUpdate, member, memberEditing, open, openMemberId }) => {
  return (
    <Dialog open={open}>
      {/* <DialogTitle className={classes.title} id='dt-edit-member'> */}
      <div className={classes.title}>
        <Name
          handleUpdate={handleUpdate}
          memberEditing={member}
          action={VIEW}
        />
        <div>
          <IconButton><StarIcon className={classes.icon} /></IconButton>
          <IconButton><EditIcon className={classes.icon} /></IconButton>
          <IconButton><DeleteIcon className={classes.icon} /></IconButton>
        </div>
      </div>
      {/* </DialogTitle> */}
      <DialogContent className={classes.content}>
        <Email
          handleUpdate={handleUpdate}
          memberEditing={member}
          action={VIEW}
        />
        <Phones
          handleUpdate={handleUpdate}
          phones={member.phones}
          action={VIEW}
        />
        <Roles
          handleUpdate={handleUpdate}
          roles={member.roles}
          action={VIEW}
        />
        <Comments
          handleUpdate={handleUpdate}
          memberEditing={member}
          action={VIEW}
        />

      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          onClick={() => handleCloseClick()}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )

}

export default withStyles(styles)(MemberDialogView)
