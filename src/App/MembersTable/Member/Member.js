import React, { Component } from 'react'
import {TableCell, TableRow} from '@material-ui/core'
import shortid from 'shortid'
import { Icon, IconButton } from '@material-ui/core'
import Cell from './Cell'
import { green } from 'logger'

class Member extends Component {
  cellClick = (e) => {
    this.props.handleOpenClick(e, this.props._id, 'MemberDialog')
  }
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

    return (
      <TableRow>
        <Cell cellClick={this.cellClick}>{firstName}</Cell>
        <Cell cellClick={this.cellClick}>{lastName}</Cell>
        <Cell cellClick={this.cellClick}>{comments}</Cell>
        <Cell cellClick={this.cellClick}>{exempt ? 'Yes': 'No'}</Cell>
        <Cell cellClick={this.cellClick}>{renderPhone}</Cell>
        <Cell cellClick={this.cellClick}>{email}</Cell>
        <TableCell><IconButton><Icon>edit</Icon></IconButton></TableCell>
        <TableCell><IconButton><Icon>delete</Icon></IconButton></TableCell>
      </TableRow>
    )
  }

}

export default Member
