import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import PhoneIcon from       '@material-ui/icons/Phone'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


import { withStyles } from "@material-ui/core/styles";
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'


import { green } from 'logger'

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

class PhoneCreateEdit extends Component {
  state = {
    age: '',
    name: 'hai',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { classes, _id, handleUpdate, phoneNumber, phoneType } = this.props
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


        <div autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              //value={this.state.age}
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>


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


}

export default withStyles(styles)(PhoneCreateEdit)
