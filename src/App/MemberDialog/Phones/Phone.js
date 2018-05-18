import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { VIEW } from 'App/const'
import PhoneIcon from       '@material-ui/icons/Phone'
import Body1 from 'elements/Body1'
import Caption from 'elements/Caption'
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
  bull: {
    fontSize: '0.7em',
    color: 'white',
  },
  viewPhoneType: {
    color: 'rgb(200, 200, 200)'
  },
  viewWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    padding: '10px 0 10px 0'
  }
})

const PhoneComp = ({ action, classes, _id, handleUpdate, phoneNumber, phoneType }) => {
  if (action === VIEW) {
    return (
      <div className={classes.viewWrapper}>
        <PhoneIcon className={classes.icon}>phone</PhoneIcon>
        <Body1 noGutter>{phoneNumber}</Body1><span className={classes.bull}>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span><Body1 noGutter><span className={classes.viewPhoneType}>{phoneType}</span> </Body1>
      </div>
    )
  } else {
    return (
      <div key={_id}>
        <PhoneIcon className={classes.icon}>phone</PhoneIcon>
        <TextField
          className={classes.textField}
          label='Phone'
          name='phone|phoneType'
          onChange={
            action !== VIEW
              ? (e) => handleUpdate(e, _id)
              : null
          }
          type='text'
          value={phoneType}
        />
        <TextField
          label='Phone'
          name='phone|phoneNumber'
          onChange={
            action !== VIEW
              ? (e) => handleUpdate(e, _id)
              : null
          }
          type='text'
          value={phoneNumber}
        />
      </div>
    )
  }

}

export default withStyles(styles)(PhoneComp)
