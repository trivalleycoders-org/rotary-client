import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import Phone from './Phone'
import { green } from 'logger'

const Phones = ({ handleUpdate, phones }) => {
  // green('phones', phones)
  const renderPhones = phones.map(p => {
    return (
      <Phone
        key={p._id}
        _id={p._id}
        handleUpdate={handleUpdate}
        phoneType={p.phoneType}
        phoneNumber={p.phoneNumber}
      />
    )
  })
  return (
    <div>
      {renderPhones}
    </div>
  )
}
export default Phones
