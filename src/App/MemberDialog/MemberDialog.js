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
import Email from './Email'
import Comments from './Comments'
import grey from 'material-ui/colors/grey'
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

class MemberDialog extends Component {
  state = {
    dirty: false
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
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
    const {
      classes,
      handleClose,
      member,
      memberEditing,
      open,
      openMemberId,
    } = this.props
    if (isEmpty(memberEditing)) { return null}
    return (
      <Dialog open={open}>
        <DialogTitle className={classes.title} id='dt-edit-member'>
          Edit Member
          <Caption>ID: {openMemberId}</Caption>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Name
            handleUpdate={this.handleUpdate}
            memberEditing={memberEditing}
          />

          <Email
            handleUpdate={this.handleUpdate}
            memberEditing={memberEditing}
          />
          <Phones
            handleUpdate={this.handleUpdate}
            phones={memberEditing.phone}
          />
          <Roles
            handleUpdate={this.handleUpdate}
            roles={memberEditing.roles}
          />
          <Comments
            handleUpdate={this.handleUpdate}
            memberEditing={memberEditing}
          />

        </DialogContent>
        <DialogActions>
          <Button
            color='primary'
            onClick={() => this.handleCloseClick()}>
            Cancel
          </Button>
          <Button
            color='primary'
            disabled={!this.state.dirty}
            onClick={(e, memberEditing) => this.handleSaveClick(e, memberEditing)}>
            Save
          </Button>
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
