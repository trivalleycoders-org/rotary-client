import React, { Component } from 'react'
import Button from 'material-ui/Button'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'

import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import * as requestSelectors from 'store/request-selectors'
import { requestKeyReadMembers } from '../../constants'
import Section from 'elements/Section'
import Member from './Member'
// import MemberAdd from './MemberAdd'
import MembersTable from './MembersTable'
import MemberDialog from './MemberDialog'
import {yellow} from 'logger'

class Members extends Component {
  state = {
    open: false,
  }

  componentDidMount() {
    this.props.thunkRequestReadMembers()

  }

  handleOpenClick = (e, id) => {
    yellow('table row click', id)

    this.setState({
     open: true,
    })
  }

  handleClose = value => {
    this.setState({ selectedValue: value, open: false })
  }

  render() {
    const {members, readMembersStatus} = this.props
    if (readMembersStatus !== 'success') {
      return (<h1>Loading...</h1>)
    }



    return (
      <Section title='Members' l1="l1">

        {/* <Button variant='raised' color='primary' onClick={this.handleAddMemberClick}>
          Add Member
        </Button> */}
        {/* <MemberAdd/> */}
        <MembersTable
          members={members}
          handleOpenClick={this.handleOpenClick}
        />
        <MemberDialog
         open={this.state.open}
         handleClose={this.handleClose}
        />
      </Section>
    )
  }
}

const mapStateToProps = (state) => {

  const o = {
    readMembersStatus: requestSelectors.getRequestStatus(state, requestKeyReadMembers),
    members: memberSelectors.getMembers(state)
  }
  return o
}

export default connect(mapStateToProps, memberActions)(Members)

// export default compose(
//   withStyles(styles, { name: 'Members' }),
//   connect(mapStateToProps, memberActions)
// )(Members)
