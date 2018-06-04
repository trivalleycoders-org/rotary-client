import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import Paper from '@material-ui/core/Paper'
import Member from './Member'
import { CREATE, MEMBER_DIALOG } from 'App/const'
import { green } from 'logger'

const styles = theme => ({
  paper: {
    position: 'relative',
    paddingBottom: 56 + theme.spacing.unit * 4,
  },
  button: {
    position: 'absolute',
    // right: '40px',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,

  },
})

const MembersTable = ({ classes, handleMemberRowClick, members }) => {
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
        phones={m.phones}
        email={m.email}
        handleMemberRowClick={handleMemberRowClick}
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
      <Button
        variant="fab"
        color="primary"
        aria-label="add"
        className={classes.button}
        onClick={e => handleMemberRowClick({ e: e, formName: MEMBER_DIALOG, action: CREATE })}
      >
        <AddIcon />
      </Button>
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    members: memberSelectors.getAllMembers(state),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, memberActions)
)(MembersTable)
