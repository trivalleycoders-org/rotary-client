import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import Select from 'elements/Select'
import { green } from 'logger'


import IconButton from '@material-ui/core/IconButton'


class PhoneCreateEdit extends Component {


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { classes, _id, handleUpdate, phoneNumber, phoneType } = this.props
    return (
      <div id='f1' className={classes.createEditWrapper} key={_id}>
        <PhoneIcon className={classes.icon}>phone</PhoneIcon>
        <TextField
          label='Phone'
          name='phone|phoneNumber'
          onChange={(e) => handleUpdate(e, _id)}
          type='text'
          value={phoneNumber}
        />
        <Select
          handleChange={handleUpdate}
          label='Phone Type'
          menuItems={['Home', 'Work', 'Mobile']}
          controlName='phone|phoneType'
        />

        <IconButton color='primary' className={classes.addButton}>
          <AddIcon />
        </IconButton>

        <IconButton color='secondary' className={classes.addButton}>
          <ClearIcon />
        </IconButton>
      </div>
    )
  }
}

export default PhoneCreateEdit

{/* <TextField
  className={classes.textField}
  label='Phone'
  name='phone|phoneType'
  onChange={(e) => handleUpdate(e, _id)}
  type='text'
  value={phoneType}
/> */}
