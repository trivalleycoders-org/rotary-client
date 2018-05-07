import React, { Component } from 'react'
import Switch from 'material-ui/Switch'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
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
      checked: this.props.checked,
    }
  }

  handleCheckedChange = (switchId) => {
    blue('handle change', switchId)
    let checked = null
    this.setState((prevState, props) => {
      checked = !prevState.checked
      return {checked: checked}
    })
    // this.props.handleRoleChange({id: switchId, checked: checked})
  }
  render() {
    const { switchId, switchName, checked, handleRoleChange, value, classes } = this.props
    // blue('ExemptSwitch: switchName', switchName)
    blue('render', switchId)
    return (
      <FormControlLabel
        label={switchName}
        control={
          <Switch
            switchId={switchId}
            checked={this.state.checked}
            onChange={this.handleCheckedChange(switchName)}
            value={value}
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
