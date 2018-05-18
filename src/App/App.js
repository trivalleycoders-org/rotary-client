import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as requestSelectors from 'store/request-selectors'
import MembersTable from './MembersTable'
import MemberDialog from './MemberDialog'
import AppBar from 'elements/AppBar'
import { CREATE } from 'App/const'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Box from './Box'

import { green } from 'logger'


class App extends Component {
  state = {
    MemberDialog: false,
    action: '',
  }
  componentDidMount() {
    this.props.requestReadAllMembers()
  }

  handleMemberRowClick = ({ e, _id, formName, action }) => {
    // green(`handleMemberRowClick: ${_id}, ${formName}, ${action}`)
    if (action !== CREATE) {
      this.props.setOpenMemberId(_id)
    }
    this.setState({
      [formName]: true,
      action: action,
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
      <Router>
        <Fragment>
          <Box />
          <AppBar title='Rotary Club' />

          <MembersTable handleMemberRowClick={this.handleMemberRowClick} />
          <Route
            exact
            path='/'
            render={props => <MemberDialog
              open={this.state.MemberDialog}
              handleClose={this.handleClose}
              action={this.state.action}
              {...props}
            />}
          />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    readMembersStatus: requestSelectors.getRequestStatus(state, memberActions.requestKeyReadAllMembers),
  }
}

export default connect(mapStateToProps, memberActions)(App)
