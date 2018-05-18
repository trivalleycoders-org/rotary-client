import React, { Component } from 'react'
import { Switch } from '@material-ui/core'
import { /*FormGroup,*/ FormControlLabel } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import { VIEW } from 'App/const'
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
    const { _id, action, avoid, classes, hanedleUpdate, name } = this.props
    // blue('ExemptSwitch: switchName', switchName)
    blue('action', action)
    return (
      <FormControlLabel
        label={name}
        name={`roles|${name.toLowerCase()}`}
        control={
          <Switch
            checked={this.state.checked}
            name='roles|avoid'
            onChange={
              action !== VIEW
                ? (e) => this.handleCheckedChange(e, _id, 'switch')
                : null
            }
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
