import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PhoneCreateEdit from './PhoneCreateEdit'
import PhoneView from './PhoneView'

import { CREATE, EDIT, VIEW } from 'App/const'
import { green, red } from 'logger'

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

const Phones = ({ action, classes, handleUpdate, phones }) => {
  // green('phones', phones)
  green('Phones.action', action)
  green('Phones', phones)
  if (phones.length === 0) {
    // It is a Create
    const newPhone = { phoneType: 'mobile', phoneNumber: ''}
    phones.push(newPhone)
  }
  const renderPhones = phones.map(p => {
    if (action === CREATE || action === EDIT) {
      return (
        <PhoneCreateEdit
          _id={p._id}
          action={action}
          classes={classes}
          key={p._id}
          handleUpdate={handleUpdate}
          phoneNumber={p.phoneNumber}
          phoneType={p.phoneType}
        />
      )
    } else if (action === VIEW) {
      return (
        <PhoneView
          classes={classes}
          phoneNumber={p.phoneNumber}
          phoneType={p.phoneType}
        />
      )
    } else {
      red('ERROR Phones.js', `Unknown action '${action}'`)
    }

  })
  return (
    <div>
      {renderPhones}
    </div>
  )
}
export default withStyles(styles)(Phones)
