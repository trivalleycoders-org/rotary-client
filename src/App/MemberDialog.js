import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { isEmpty } from 'ramda'

import { green, red } from 'logger'

const actions = { ...memberActions }
const selectors = {...memberSelectors}

class MemberDialog extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    // green('componentDidUpdate: member', this.props.member)
    // green('componentDidUpdate: prevProps', prevProps)
    // green('componentDidUpdate: prevState', prevState)
    // green('componentDidUpdate: snapshot', snapshot)
    // if (isEmpty(prevProps.member)) {

    if (!prevProps.open) {
      if (!isEmpty(this.props.member)) {
        green('we found a member')
        green('the member is', typeof this.props.member)
        this.props.setMemberEditing(this.props.member)
      } else {
        red('MemberDialog.componentDidUpdate: There is no member.')
      }

    }
  }

  handleUpdate = (e) => {
    const field = e.target.name
    const value = e.target.value
    // green('handleUpdate', `${field}: ${value}`)
    actions.updateMemberEditing(field, value)
  }

  render() {
    const {
      handleClose,
      member,
      memberEditing,
      open,
      openMemberId,
      // setMemberEditing,
      // updateMemberEditing,
     } = this.props
    green('MemberDialog: memberEditing.phone', memberEditing.phone)
    return (
      <Dialog open={open}>
        <DialogTitle id='dt-edit-member'>Edit Member</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ID: {openMemberId}
          </DialogContentText>
          <TextField
            // defaultValue={editingMember.firstName}
            label='First Name'
            name='firstName'
            onChange={(e) => this.handleUpdate(e)}
            type='text'
            value={memberEditing.firstName}
          />
          {/* <TextField
            label='Phone'
            name='phone'
            onChange={(e) => this.handleUpdate(e)}
            type='text'
            value={memberEditing.phone}
          /> */}
          <TextField
            label='Email'
            name='email'
            onChange={(e) => this.handleUpdate(e)}
            type='text'
            value={memberEditing.email}
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
  const id = selectors.getOpenMemberId(state)
  const o = {
    member: selectors.getOneMember(state, id),
    openMemberId: id,
    memberEditing: selectors.getMemberEditing(state),
  }
  green('o', o)
  return o
}

export default connect(mapStateToProps, actions)(MemberDialog)
