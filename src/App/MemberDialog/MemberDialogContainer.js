import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import { isEmpty } from 'ramda'
import { compose } from 'recompose'
import MemberDialogView from './MemberDialogView'
import MemberDialogCreateEdit from './MemberDialogCreateEdit'
import MemberDialogDelete from './MemberDialogDelete'
import { green, red } from 'logger'
import { MEMBER_DIALOG, VIEW, EDIT, CREATE, DELETE } from 'App/const'
import type { Member } from '../types/member-types'
import { clone, dissoc } from 'ramda'

const cleanMember = (member) => {
  // check phones
  console.log('member', member)

  const phones = member.phones.filter(
    p => p.phoneType !== '' && p.phoneNumber !== ''
  )

  const nm1 = phones.length === 0
    ? dissoc('phones', clone(member))
    : clone(member)
  green('roles.length', nm1.roles.length)
  const nm2 = nm1.roles.length === 0
    ? dissoc('roles', nm1)
    : nm1

  green('newMember', nm2)
  return nm2
}

class MemberDialogContainer extends Component {
  state = {
    dirty: false,
    validate: false,
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  const { action, member, memberEditing, open, setMemberEditing, updateMemberEditing } = this.props

    if (open && isEmpty(memberEditing)) {
      if (action === VIEW || action === EDIT) {
          setMemberEditing(member)
      }
      if (action === CREATE) {
        const newMember: Member = {
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

  handleSave = (e) => {

    const { action } = this.props
    if (action === EDIT || action === CREATE) {
      this.setState({
        validate: true,
      })
    }
    if (action === EDIT) {
      this.props.requestUpdateOneMember(this.props.memberEditing)
    } else if (action === CREATE) {
      green('handleSave: memberEditing; ', this.props.memberEditing)
      this.props.requestCreateOneMember(cleanMember(this.props.memberEditing))
      // this.props.requestCreateOneMember(this.props.memberEditing)
    } else {
      red('MemberDialogContainer.handleSave: Error: ', `Invalid case ${action}`)
    }
    // green('handleSaveClick: this.props.memberEditing', this.props.memberEditing)
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
          handleCloseClick={this.handleClose}
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
          validate={this.state.validate}
        />
      } else if (action === DELETE) {
        return <MemberDialogDelete
          action={action}
          handleClose={this.handleClose}
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
    action: memberSelectors.getMemberDialogAction(state)
  }
}

export default connect(mapStateToProps, memberActions)(MemberDialogContainer)
