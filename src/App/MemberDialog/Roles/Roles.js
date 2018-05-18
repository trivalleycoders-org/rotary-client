import React, { Component } from 'react'
import Role from './Role'
import SubHeading from 'elements/SubHeading'
import Paper from '@material-ui/core/Paper'
import Caption from 'elements/Caption'
import { withStyles } from '@material-ui/core/styles'
import { green } from 'logger'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
})

const Roles = ({ action, classes, handleUpdate, roles}) => {
  const renderRoles = roles.map(r => {
    return (
      <Role
        action={action}
        key={r._id}
        _id={r._id}
        handleUpdate={handleUpdate}
        name={r.name}
        avoid={r.avoid}
      />
    )
  })

  return (
    // <Paper className={classes.root}>
    <div className={classes.root}>
      <SubHeading>Roles</SubHeading>
      <Caption>On means member is willing to perform the role</Caption>
      {renderRoles}
    </div>
    // </Paper>
  )
}

export default withStyles(styles)(Roles)
