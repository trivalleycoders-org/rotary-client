import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import { isEmpty } from 'ramda'
import { compose } from 'recompose'
import MemberDialogView from './MemberDialogView'
import MemberDialogCreateEdit from './MemberDialogCreateEdit'
import MemberDialogDelete from './MemberDialogDelete'
import { green } from 'logger'
import { MEMBER_DIALOG, VIEW, EDIT, CREATE, DELETE } from 'App/const'


class MemberDialogContainer extends Component {
  state = {
    dirty: false
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

    const { action, member, memberEditing, open, setMemberEditing } = this.props

    if (open && isEmpty(memberEditing)) {
      if (action === VIEW || action === EDIT) {
          setMemberEditing(member)
      }
      if (action === CREATE) {
        const newMember = {
          exempt: false,
          roles: [],
          phones: [],
          firstName: '',
          lastName: '',
          comments: '',
          email: '',
        }
        setMemberEditing(newMember)
      }
    }
  }

  handleUpdate = (e, _id, controlType) => {
    // if the item is a sub-document with _id, it will be passed

    const field = e.target.name
    let value
    if (controlType === 'switch') {
      value = e.target.checked
    } else {
      value = e.target.value
    }
    this.props.updateMemberEditing(field, value, _id)
    this.setState({
      dirty: true,
    })
  }
  handleClose = () => {
    this.props.unsetOpenMemberId()
    this.props.unsetMemberEditing()
    this.props.handleClose(MEMBER_DIALOG)
  }
  handleSave = (e, memberEditing) => {
    // green('handleSaveClick: this.props.memberEditing', this.props.memberEditing)
    this.props.requestUpdateOneMember(this.props.memberEditing)
    this.props.unsetOpenMemberId()
    this.props.unsetMemberEditing()
    this.props.handleClose(MEMBER_DIALOG)
  }
  addPhone = () => {
    this.props.memberEditingAddPhone()
  }

  render() {
    const { action, member, memberEditing, open, openMemberId } = this.props
    if (isEmpty(memberEditing)) { return null}
    const form = () => {
      if (action === VIEW) {
        return <MemberDialogView
          action={action}
          handleCloseClick={this.handleCloseClick}
          member={member}
          open={open}
          openMemberId={openMemberId}
        />
      } else if (action === EDIT || action === CREATE) {
        return <MemberDialogCreateEdit
          action={action}
          addPhone={this.addPhone}
          dirty={this.state.dirty}
          handleClose={this.handleClose}
          handleSave={this.handleSave}
          handleUpdate={this.handleUpdate}
          member={member}
          memberEditing={memberEditing}
          open={open}
          openMemberId={openMemberId}
        />
      } else if (action === DELETE) {
        return <MemberDialogDelete
          action={action}
          handleClose={this.handleCloseClick}
          open={open}
        />
      }
      return null

    }

    return (
      <Fragment>
        {form()}
      </Fragment>
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

export default connect(mapStateToProps, memberActions)(MemberDialogContainer)
