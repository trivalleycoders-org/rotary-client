import React, {Component} from 'react'
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
import MemberAdd from './MemberAdd'

import {yellow} from 'logger'

class Members extends Component {

  componentDidMount() {
    this.props.thunkRequestReadMembers()

  }

  handleAddMemberClick = () => {}

  render() {
    const {members, readMembersStatus} = this.props
    if (readMembersStatus !== 'success') {
      return (<h1>Loading...</h1>)
    }

    const rows = members.map(m => {
      return (
        <Member
          _id={m._id}
          firstName={m.firstName}
          lastName={m.lastName}
          comments={m.comments}
          exempt={m.exempt}
          roles={m.roles}
          phone={m.phone}
          email={m.email}
        />
      )
    })

    return (
      <Section title='Members' l1="l1">

        {/* <Button variant='raised' color='primary' onClick={this.handleAddMemberClick}>
          Add Member
        </Button> */}
        {/* <MemberAdd/> */}
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows}
            </TableBody>
          </Table>
        </Paper>
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
