// @flow
import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import IconButton from '@material-ui/core/IconButton'
import PhoneIcon from '@material-ui/icons/Phone'
import Select from './PhoneTypeSelect'
import { green } from 'logger'

type Props = {
  addPhone: () => void,
  classes: {
    createEditWrapper: string,
    icon: string,
    addButton: string,
  },
  _id: string,
  handleUpdate: (e: {}, _id: string) => void,
  phoneNumber: string,
  phoneType: string,
}

class PhoneCreateEdit extends Component<Props> {

  render() {
    const { addPhone, classes, _id, handleUpdate, phoneNumber, phoneType } = this.props
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
