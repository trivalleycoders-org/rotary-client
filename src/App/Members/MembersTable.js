import React, {Component} from 'react'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Member from './Member'

const MembersTable = ({ members, handleOpenClick }) => {
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
        handleOpenClick={handleOpenClick}
      />
    )
  })
  return (
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
  )
}
export default MembersTable
