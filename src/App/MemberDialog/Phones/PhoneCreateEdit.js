import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import Select from './PhoneTypeSelect'
import { green } from 'logger'


import IconButton from '@material-ui/core/IconButton'


class PhoneCreateEdit extends Component {


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { addClick, addPhone, classes, _id, handleUpdate, phoneNumber, phoneType } = this.props
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
          handleUpdate={e => handleUpdate(e, _id)}
          phoneType={phoneType}
        />

        <IconButton
          color='primary'
          className={classes.addButton}
          onClick={() => addPhone()}
          >
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
