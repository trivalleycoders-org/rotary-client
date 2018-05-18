import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import { isEmpty } from 'ramda'
import { compose } from 'recompose'
import MemberDialogView from './MemberDialogView'
import MemberDialogEdit from './MemberDialogEdit'
import MemberDialogAdd from './MemberDialogAdd'
import MemberDialogDelete from './MemberDialogDelete'
import { green } from 'logger'
import { MEMBER_DIALOG, VIEW } from 'App/const'


class MemberDialogContainer extends Component {
  state = {
    dirty: false
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    green('componentDidUpdate')
    // green('this.props.open', this.props.open)
    // green('memberEditing', this.props.memberEditing)
    if (this.props.open && isEmpty(this.props.memberEditing)) {
      this.props.setMemberEditing(this.props.member)
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
  handleCloseClick = () => {
    this.props.unsetOpenMemberId()
    this.props.unsetMemberEditing()
    this.props.handleClose(MEMBER_DIALOG)
  }
  handleSaveClick = (e, memberEditing) => {

    // green('handleSaveClick: this.props.memberEditing', this.props.memberEditing)
    this.props.requestUpdateOneMember(this.props.memberEditing)
    this.props.unsetOpenMemberId()
    this.props.unsetMemberEditing()
    this.props.handleClose(MEMBER_DIALOG)
  }

  render() {
    const { action, member, memberEditing, open, openMemberId } = this.props
    if (isEmpty(memberEditing)) { return null}
    const form = () => {
      if (action === VIEW) {
        return <MemberDialogView
          handleCloseClick={this.handleCloseClick}
          member={member}
          open={open}
          openMemberId={openMemberId}
        />
      }
      if (action === 'edit') {
        return <MemberDialogEdit
          dirty={this.state.dirty}
          handleCloseClick={this.handleCloseClick}
          handleSaveClick={this.handleSaveClick}
          handleUpdate={this.handleUpdate}
          member={member}
          memberEditing={memberEditing}
          open={open}
          openMemberId={openMemberId}
        />
      }
      if (action === 'add') {
        return <MemberDialogAdd
          dirty={this.state.dirty}
          handleCloseClick={this.handleCloseClick}
          handleSaveClick={this.handleSaveClick}
          handleUpdate={this.handleUpdate}
          member={member}
          memberEditing={memberEditing}
          open={open}
          openMemberId={openMemberId}
        />
      }
      if (action === 'delete') {
        return <MemberDialogDelete
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
