import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as requestSelectors from 'store/request-selectors'
import MembersTable from './MembersTable'
import MemberDialog from './MemberDialog'
import AppBar from 'elements/AppBar'
import { green } from 'logger'


class App extends Component {
  state = {
    MemberDialog: false,
  }
  componentDidMount() {
    this.props.requestReadAllMembers()
  }

  handleOpenClick = (e, _id, formName, action) => {
    this.props.setOpenMemberId(_id)
    this.setState({
      [formName]: true
    })
  }

  handleClose = (formName) => {
    this.props.unsetOpenMemberId()
    this.setState({
      [formName]: false
    })
  }


  render() {
    const { readMembersStatus } = this.props
    if (readMembersStatus !== 'success') {
      return (<h1>Loading...</h1>)
    }
    return (
      <div>
        <AppBar title='Rotary Club' />
        <MembersTable handleOpenClick={this.handleOpenClick} />
        <MemberDialog
          open={this.state.MemberDialog}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    readMembersStatus: requestSelectors.getRequestStatus(state, memberActions.requestKeyReadAllMembers),
  }
}

export default connect(mapStateToProps, memberActions)(App)
