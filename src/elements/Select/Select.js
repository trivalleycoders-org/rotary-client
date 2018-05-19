import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

/*
root: {
  display: 'flex',
  flexWrap: 'wrap'
},
*/

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

class SelectComp extends React.Component {
  state = {

  }

  _handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    this.props.handleChange(event)
  }

  menuItems = this.props.menuItems.map(m => {
    return (
      <MenuItem
        key={m}
        value={m}
        >
        {m}
      </MenuItem>
    )
  })
  // <div className={classes.root} autoComplete='off'>
  render() {
    const { classes, controlName, defaultValue, handleChange, label, menuItems, onChange, value } = this.props


    return (
      <div id='a1' autoComplete='off'>
        <FormControl id='a2' className={classes.formControl}>
          <InputLabel htmlFor='month1'>{label}</InputLabel>
          <Select
            value={this.state[controlName] || ''}
            onChange={this._handleChange}
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

SelectComp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SelectComp)
