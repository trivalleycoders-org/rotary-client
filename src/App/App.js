import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as requestSelectors from 'store/request-selectors'
// import { requestKeyReadMembers } from '../constants'
import MembersTable from './MembersTable'
import MemberDialog from './MemberDialog'
// import Hello from './Hello'
import { green } from 'logger'

class App extends Component {
  state = {
    MemberDialog: false,
  }
  componentDidMount() {
    this.props.thunkRequestReadMembers()
  }

  handleOpenClick = (e, _id, formName) => {
    green('1) App.handleOpenClick: _id', _id)
    // green('props', this.props)
    // green('actionCreators', actions)
    // green('handleOpenClick: id', memberId);
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
    readMembersStatus: requestSelectors.getRequestStatus(state, memberActions.requestKeyReadMembers),
  }
}

export default connect(mapStateToProps, memberActions)(App)
