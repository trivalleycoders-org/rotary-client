import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { green } from 'logger'

const Phone = ({ _id, handleUpdate, phoneType, phoneNumber }) => {
  return (
    <div key={_id}>
      <TextField
        label='Phone'
        name='phoneType'
        onChange={(e) => handleUpdate(e, _id)}
        type='text'
        value={phoneType}
      />
      <TextField
        label='Phone'
        name='phoneNumber'
        onChange={(e) => handleUpdate(e, _id)}
        type='text'
        value={phoneNumber}
      />
    </div>
  )
}

export default Phone
