import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import { isEmpty } from 'ramda'
import { compose } from 'recompose'
import MemberDialog from './MemberDialog'
import { green } from 'logger'

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
    this.props.handleClose('MemberDialog')
  }
  handleSaveClick = (e, memberEditing) => {

    // green('handleSaveClick: this.props.memberEditing', this.props.memberEditing)
    this.props.requestUpdateOneMember(this.props.memberEditing)
    this.props.unsetOpenMemberId()
    this.props.unsetMemberEditing()
    this.props.handleClose('MemberDialog')
  }

  render() {
    const { member, memberEditing, open, openMemberId } = this.props
    if (isEmpty(memberEditing)) { return null}
    return (
      <MemberDialog
        dirty={this.state.dirty}
        handleCloseClick={this.handleCloseClick}
        handleSaveClick={this.handleSaveClick}
        handleUpdate={this.handleUpdate}
        member={member}
        memberEditing={memberEditing}
        open={open}
        openMemberId={openMemberId}
      />
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
