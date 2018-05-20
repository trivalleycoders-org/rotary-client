import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const styles = theme => ({

  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const controlName = 'phone|phoneType'
const menuItems = ['Home', 'Work', 'Mobile']

class PhoneTypeSelect extends React.Component {

  menuItems = menuItems.map(m => {
    return (
      <MenuItem
        key={m}
        value={m}
        >
        {m}
      </MenuItem>
    )
  })

  render() {
    const { classes, handleUpdate, phoneType } = this.props

    return (
      <div id='PhoneTypeSelect' autoComplete='off'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={controlName}>Phone Type</InputLabel>
          <Select
            value={phoneType}
            onChange={handleUpdate}
            inputProps={{
              name: controlName,
              id: `id-${controlName}`
            }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {this.menuItems}
          </Select>
        </FormControl>
      </div>
    )
  }
}

PhoneTypeSelect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PhoneTypeSelect)
