import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import * as requestSelectors from 'store/request-selectors'
import {requestKeyReadMembers} from '../../constants'
import Section from 'elements/Section'
import Member from './Member'
import MemberAdd from './MemberAdd'
import Typography from 'material-ui/Typography'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import ExemptSwitch from './ExemptSwitch'


import {yellow} from 'logger'

class Members extends Component {
  constructor(props) {
    super(props)

    this.state = {
        photographer: true,
        journal: true,
        greeter: true
    }
  }
  componentDidMount() {
    // yellow('componentDidMount')
    this.props.thunkRequestReadMembers()

  }

  handleAddMemberClick = () => {}

  // handleRoleChange = name => e => {
  //   const target = e.target
  //   const value = target.type === 'checkbox' ? target.checked : target.value
  //
  //   // const name = target.name
  //   yellow('name', name)
  //   this.setState({
  //     [name]: value,
  //   })
  // }

  handleRoleChange = (e, switchName) => {
    yellow('e', e)
    yellow('name', switchName)
    // const target = e.target
    // const value = target.type === 'checkbox' ? target.checked : target.value
    //
    // // const name = target.name
    // yellow('name', name)
    // this.setState({
    //   [name]: value,
    // })
  }

  render() {
    const {members, readMembersStatus} = this.props
    if (readMembersStatus !== 'success') {
      return (<h1>Loading...</h1>)
    }
    // yellow('before: isArray(members)', Array.isArray(members))
    // const rows = members.map((m, index) => {
    //   // yellow('m', m)
    //   return (<Member key={index} comments={m.comments} exempt={m.exempt} avoidRoles={m.avoidRoles} phone={m.phone} _id={m._id} firstName={m.firstName} lastName={m.lastName} email={m.email}/>)
    // })


    const roles = (roles) => {
      return (
        <div>
          {roles.map(r => {
            const switchName = r.name.toLowerCase()
            return (
              <ExemptSwitch
                checked={this.state[`${switchName}`]}
                handleRoleChange={(e, switchName) => this.handleRoleChange(e, switchName)}
                value={switchName}
                switchName={switchName}
              />
            )
          })}
        </div>
      )
    }

    const rows =  members.map(m => {
      const phones = m.phone.map(p => <div>{p.phoneType}: {p.phoneNumber}</div>)
      return (
        <TableRow key={m._id}>
          <TableCell>{m.firstName}</TableCell>
          <TableCell>{m.lastName}</TableCell>
          <TableCell>{m.comments}</TableCell>
          <TableCell>{m.exempt}</TableCell>
          <TableCell>{roles(m.roles)}</TableCell>
          <TableCell>{phones}</TableCell>
          <TableCell>{m.email}</TableCell>
        </TableRow>
      )}
    )


    // const roles = members.map(m => {
    //   return (
    //     <div>
    //       <Role
    //         checked={this.state[`${m}`]}
    //       />
    //     </div>
    //   )
    // })


    return (
      <Section title='Members' l1="l1">

        <Button variant='raised' color='primary' onClick={this.handleAddMemberClick}>
          Add Member
        </Button>
        <MemberAdd/>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First</TableCell>
                <TableCell>Last</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Exempt</TableCell>
                <TableCell>Roles</TableCell>
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
