import React, { Component } from 'react'
import {TableCell, TableRow} from 'material-ui/Table'
import Button from 'material-ui/Button'
import shortid from 'shortid'
// import RoleSwitch from './RoleSwitch'
import { green } from 'logger'

class Member extends Component {

  render() {
    const {
      firstName,
      comments,
      email,
      exempt,
      handleOpenClick ,
      _id,
      lastName,
      phone,
      /*roles,*/
     } = this.props

    const renderPhone = phone.map((p) => {
      return (<div key={shortid.generate()}>{`${p.phoneType}: ${p.phoneNumber}`}</div>)
    })
    // green('Member: _id', _id)
    // const renderRoles = roles.map((r) => {
    //   return (<div key={shortid.generate()}>{`${r}`}</div>)
    // })
    return (
      <TableRow onClick={event => handleOpenClick(event, _id, 'MemberDialog')}>
        <TableCell>{firstName}</TableCell>
        <TableCell>{lastName}</TableCell>
        <TableCell>{comments}</TableCell>
        <TableCell>{exempt ? 'Yes': 'No'}</TableCell>
        <TableCell>{renderPhone}</TableCell>
        <TableCell>{email}</TableCell>
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
