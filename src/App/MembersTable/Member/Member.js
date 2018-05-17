import React, { Component } from 'react'
import {TableCell, TableRow} from '@material-ui/core'
import shortid from 'shortid'
import { Icon, IconButton } from '@material-ui/core'
import Cell from './Cell'
import { green } from 'logger'
import { MEMBER_DIALOG } from 'App/const'

class Member extends Component {

  memberRowClick = (e, action) => {
    green('Member.memberRowClick: action', action)
    this.props.handleMemberRowClick({ e: e, _id: this.props._id, formName: MEMBER_DIALOG, action: action })
  }

  render() {
    const {
      _id,
      firstName,
      comments,
      email,
      exempt,
      lastName,
      handleMemberRowClick,
      phone,
      /*roles,*/
     } = this.props

    const renderPhone = phone.map((p) => {
      return (<div key={shortid.generate()}>{`${p.phoneType}: ${p.phoneNumber}`}</div>)
    })

    return (
      <TableRow>
        <TableCell onClick={e => this.memberRowClick(e, 'view')}>{firstName}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, 'view')}>{lastName}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, 'view')}>{comments}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, 'view')}>{exempt ? 'Yes': 'No'}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, 'view')}>{renderPhone}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, 'view')}>{email}</TableCell>
        <TableCell><IconButton><Icon>edit</Icon></IconButton></TableCell>
        <TableCell><IconButton><Icon>delete</Icon></IconButton></TableCell>
      </TableRow>
    )
  }

}

export default Member
