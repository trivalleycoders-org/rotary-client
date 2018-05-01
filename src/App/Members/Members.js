import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import * as requestSelectors from 'store/request-selectors'
import { requestKeyReadMembers } from '../../constants'
import Section from 'elements/Section'
import Table from 'elements/Table'
import TR from 'elements/TR'
import TH from 'elements/TH'
import TD from 'elements/TD'
import Member from './Member'
import { log, yellow } from 'logger'

class Members extends Component {

  componentDidMount() {
    // yellow('componentDidMount')
    this.props.thunkRequestReadMembers()

  }
  render() {
    const { members, readMembersStatus } = this.props
    if (readMembersStatus !== 'success') {
      return (<h1>Loading...</h1>)
    }
    yellow('before: isArray(members)', Array.isArray(members))
    const rows = members.map((m, index) => {
      yellow('m', m)
      return (
        <Member
          key={index}
          comments={m.comments}
          exempt={m.exempt}
          avoidRoles={m.avoidRoles}
          phone={m.phone}
          _id={m._id}
          firstName={m.firstName}
          lastName={m.lastName}
          email={m.email}
        />
      )
    })
    yellow('after: isArray(rows)', Array.isArray(rows))

    return (
      <Section>
        <h1>Members</h1>
        <Table>
          <TR>
            <TH>First</TH>
            <TH>Last</TH>
            <TH>Exempt</TH>
            <TH>Avoid</TH>
            <TH>Comments</TH>
            <TH>Phone</TH>
            <TH>Email</TH>
          </TR>
          {/* <TR>
            <TD>Hello</TD>
          </TR> */}
          {rows}
        </Table>
      </Section>
    )
  }


}

const mapStateToProps = (state) => {

  const o = {
    readMembersStatus: requestSelectors.getRequestStatus(state, requestKeyReadMembers),
    members: memberSelectors.getMembers(state),
  }
  return o
}

export default connect(mapStateToProps, memberActions)(Members)
