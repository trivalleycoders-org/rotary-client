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

class ExemptSwitch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.checked,
    }
  }

  handleCheckedChange = () => {
    this.setState((prevState, props) => {
      return {checked: !prevState.checked}
    })
  }
  render() {
    const { switchName, checked, handleRoleChange, value, classes } = this.props
    // blue('ExemptSwitch: switchName', switchName)
    return (
      <FormControlLabel
        label={switchName}
        control={
          <Switch
            checked={this.state.checked}
            onChange={this.handleCheckedChange}
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
export default withStyles(styles)(ExemptSwitch)
