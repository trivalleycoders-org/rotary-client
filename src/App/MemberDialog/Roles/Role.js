import React, { Component } from 'react'
import Switch from 'material-ui/Switch'
import { /*FormGroup,*/ FormControlLabel } from 'material-ui/Form'
import green from 'material-ui/colors/green'
import { withStyles } from 'material-ui/styles'
import { blue } from 'logger'

const styles = {
  switchBase: {
    color: green[50],
    '&$checked': {
      color: green[500],
      '& + $bar': {
        backgroundColor: green[500],
      },
    },
  },
  bar: {},
  checked: {},
}

class RoleSwitch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.avoid,
    }
  }

  handleCheckedChange = (e, _id, controlType) => {
    blue('handle change', _id)
    blue('e.target.checked', e.target.checked)
    let checked = e.target.checked
    this.setState((prevState, props) => {
      return {checked: checked}
    })
    this.props.handleUpdate(e, _id, controlType)
    // this.props.handleRoleChange({id: switchId, checked: checked})
  }
  render() {
    const { _id, hanedleUpdate, name, /*handleRoleChange,*/ avoid, classes } = this.props
    // blue('ExemptSwitch: switchName', switchName)
    return (
      <FormControlLabel
        label={name}
        name={`roles|${name.toLowerCase()}`}
        control={
          <Switch
            checked={this.state.checked}
            name='roles|avoid'
            onChange={(e) => this.handleCheckedChange(e, _id, 'switch')}
            //value={avoid}
            classes={{
              switchBase: classes.switchBase,
              checked: classes.checked,
              bar: classes.bar,
            }}
          />
        }
      />
    )
  }
}
export default withStyles(styles)(RoleSwitch)
