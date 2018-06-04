import React, { Component } from 'react'
import {TableCell, TableRow} from '@material-ui/core'
import shortid from 'shortid'
import { Icon, IconButton } from '@material-ui/core'
import { green } from 'logger'
import { MEMBER_DIALOG, VIEW } from 'App/const'

class Member extends Component {

  memberRowClick = (e, action) => {
    this.props.handleMemberRowClick({ e: e, id: this.props.id, formName: MEMBER_DIALOG, action: action })
  }

  render() {
    const {
      id,
      firstName,
      comments,
      email,
      exempt,
      lastName,
      handleMemberRowClick,
      phones,
      /*roles,*/
     } = this.props

    const renderPhone = phones.map((p) => {
      return (<div key={shortid.generate()}>{`${p.phoneType}: ${p.phoneNumber}`}</div>)
    })

    return (
      <TableRow>
        <TableCell onClick={e => this.memberRowClick(e, VIEW)}>{firstName}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, VIEW)}>{lastName}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, VIEW)}>{comments}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, VIEW)}>{exempt ? 'Yes': 'No'}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, VIEW)}>{renderPhone}</TableCell>
        <TableCell onClick={e => this.memberRowClick(e, VIEW)}>{email}</TableCell>
        <TableCell><IconButton><Icon>edit</Icon></IconButton></TableCell>
        <TableCell><IconButton><Icon>delete</Icon></IconButton></TableCell>
      </TableRow>
    )
  }

}

export default Member
