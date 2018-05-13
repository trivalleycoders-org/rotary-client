import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { isEmpty } from 'ramda'
import Phones from './Phones'
import Roles from './Roles'
import Name from './Name'
import Caption from 'elements/Caption'
import { withStyles } from 'material-ui/styles'
import { compose } from 'recompose'
import Icon from 'material-ui/Icon'
import red from 'material-ui/colors/red'
import { green } from 'logger'


const styles = theme => ({
  emailField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 416,
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

class MemberDialog extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    // green('this.props.open', this.props.open)
    green('memberEditing', this.props.memberEditing)
    if (this.props.open && isEmpty(this.props.memberEditing)) {
      this.props.setMemberEditing(this.props.member)
    }
  }

  handleUpdate = (e, _id) => {
    // if the item is a sub-document with _id, it will be passed
    const field = e.target.name
    const value = e.target.value
    this.props.updateMemberEditing(field, value, _id)
  }

  render() {
    const {
      classes,
      handleClose,
      member,
      memberEditing,
      open,
      openMemberId,
    } = this.props

    return (
      <Dialog open={open}>
        <DialogTitle id='dt-edit-member'>
          Edit Member
          <Caption>ID: {openMemberId}</Caption>
          <Icon className={classes.icon} color="primary">
            edit
          </Icon>
        </DialogTitle>
        <DialogContent>
          <Name
            handleUpdate={this.handleUpdate}
            memberEditing={memberEditing}
          />
          <TextField
            className={classes.emailField}
            label='Email'
            name='email'
            onChange={(e) => this.handleUpdate(e)}
            type='text'
            value={memberEditing.email}
          />
          <Phones
            phones={memberEditing.phone}
            handleUpdate={this.handleUpdate}
          />
          <Roles
            roles={memberEditing.roles}
            handleUpdate={this.handleUpdate}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('MemberDialog')}>Close</Button>
        </DialogActions>
      </Dialog>
    )
  }

}

const mapStateToProps = (state) => {
  const id = memberSelectors.getOpenMemberId(state)
  return {
    member: memberSelectors.getOneMember(state, id),
    openMemberId: id,
    memberEditing: memberSelectors.getMemberEditing(state),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, memberActions)
)(MemberDialog)
