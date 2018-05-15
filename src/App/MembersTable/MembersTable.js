import React from 'react'
import { connect } from 'react-redux'
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import Paper from 'material-ui/Paper'
import Member from './Member'
import { green } from 'logger'

const actions = { ...memberActions }

const MembersTable = ({ members, handleOpenClick }) => {

  const rows = members.map(m => {
    // green('MembersTable: m._id', m._id)
    return (
      <Member

        key={m._id}
        _id={m._id}
        firstName={m.firstName}
        lastName={m.lastName}
        comments={m.comments}
        exempt={m.exempt}
        // roles={m.roles}
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
            <TableCell>First</TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Exempt</TableCell>
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

const mapStateToProps = (state) => {
  return {
    members: memberSelectors.getAllMembers(state),
  }
}

export default connect(mapStateToProps, actions)(MembersTable)
