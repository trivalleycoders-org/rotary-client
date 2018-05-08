import React, { Component } from 'react'
import Table, {TableCell, TableRow} from 'material-ui/Table'
import Button from 'material-ui/Button'
import shortid from 'shortid'
import RoleSwitch from './RoleSwitch'
import { yellow } from 'logger'


class Member extends Component {


  // handleAddMemberClick = () => {}


  render() {
    const { _id, firstName, lastName, comments, exempt, roles, phone,  email, handleOpenClick } = this.props

    const renderPhone = phone.map((p) => {
      return (<div key={shortid.generate()}>{`${p.phoneType}: ${p.phoneNumber}`}</div>)
    })

    const renderRoles = roles.map((r) => {
      return (<div key={shortid.generate()}>{`${r}`}</div>)
    })
    yellow('_id', _id)
    return (
      <TableRow onClick={event => handleOpenClick(event, _id)}>
        <TableCell>{firstName} {lastName}</TableCell>
        <TableCell>{renderPhone}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell><Button>Hello</Button></TableCell>
      </TableRow>
    )
  }

}

export default Member

/*
<TableCell>{comments}</TableCell>
<TableCell>{renderRoles}</TableCell>
<TableCell>{exempt ? 'Yes' : 'No'}</TableCell>
*/
