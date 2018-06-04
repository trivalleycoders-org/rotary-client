// @flow
import React from 'react'
import { TextField } from '@material-ui/core'
import TextFieldComp from 'elements/TextFieldComp'

import Avatar from 'elements/Avatar'
import { green } from 'logger'

let firstNameError = false
// , validate, validated
const NameCreate = ({ classes, firstName, handleUpdate, handleValidated, lastName }) => {


  const validate = (e) => {

    const ret = e.target.value !== ''
    green('validate', ret)
    return ret
  }
  const localOnChange = (e) => {

    if (validate(e)) {
      firstNameError = false
      green('firstNameError', firstNameError)
    } else {
      firstNameError = true
      green('firstNameError', firstNameError)
    }
    handleUpdate(e)

  }
  return (
    <div className={classes.wrapper}>
      <Avatar className={classes.avatar}>HI</Avatar>
      <TextFieldComp
        className={classes.textField}
        label='First Name'
        name='firstName'
        onChange={(e) => localOnChange(e, '')}
        required={false}
        type='text'
        error={true}
        // validate={validate}
        // validated={validated}
        value={firstName}
      />

      <TextField
        className={classes.textField}
        label='Last Name'
        name='lastName'
        onChange={(e) => handleUpdate(e, '')}
        type='text'
        value={lastName}
      />
    </div>
  )
}

export default NameCreate

// <TextField
//   className={classes.textField}
//   label='First Name'
//   name='firstName'
//   onChange={(e) => localOnChange(e, '')}
//   required
//   error
//   type='text'
//   value={firstName}
// />
