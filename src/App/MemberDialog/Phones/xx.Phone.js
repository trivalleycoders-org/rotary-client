import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PhoneIcon from '@material-ui/icons/Phone'
import { VIEW } from 'App/const'
import Body1 from 'elements/Body1'
import Caption from 'elements/Caption'
import PhoneView from './PhoneView'


import { green } from 'logger'



const PhoneComp = ({ action, classes, _id, handleUpdate, phoneNumber, phoneType }) => {
  if (action === VIEW) {
    return (
      <PhoneView
        classes={classes}
        phoneNumber={phoneNumber}
        phoneType={phoneType}
      />
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
