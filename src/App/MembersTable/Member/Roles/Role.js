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

  handleCheckedChange = (e, _id) => {
    blue('handle change', _id)
    let checked = null
    this.setState((prevState, props) => {
      checked = !prevState.checked
      return {checked: checked}
    })
    this.props.handleUpdate(e, _id)
    // this.props.handleRoleChange({id: switchId, checked: checked})
  }
  render() {
    const { _id, hanedleUpdate, name, /*handleRoleChange,*/ avoid, classes } = this.props
    // blue('ExemptSwitch: switchName', switchName)
    blue('render', _id)
    return (
      <FormControlLabel
        label={name}
        control={
          <Switch
            checked={this.state.checked}
            onChange={(e) => this.handleCheckedChange(e, _id)}
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
