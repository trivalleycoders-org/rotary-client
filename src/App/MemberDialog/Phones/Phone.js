import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PhoneIcon from       '@material-ui/icons/Phone'
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'

import { green } from 'logger'

const styles = theme => ({
  icon: {
    color: 'white',
    // margin: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 200,
  },
})

const PhoneComp = ({ classes, _id, handleUpdate, phoneNumber, phoneType }) => {
  return (
    <div key={_id}>
      <PhoneIcon className={classes.icon}>phone</PhoneIcon>
      <TextField
        className={classes.textField}
        label='Phone'
        name='phone|phoneType'
        onChange={(e) => handleUpdate(e, _id)}
        type='text'
        value={phoneType}
      />
      <TextField
        label='Phone'
        name='phone|phoneNumber'
        onChange={(e) => handleUpdate(e, _id)}
        type='text'
        value={phoneNumber}
      />
    </div>
  )
}

export default withStyles(styles)(PhoneComp)
