// @flow
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PhoneCreateEdit from './PhoneCreateEdit'
import PhoneView from './PhoneView'
import { blue } from '@material-ui/core/colors'
import { CREATE, EDIT, VIEW } from 'App/const'
import shortid from 'shortid'
import { append } from 'ramda'

import { green, red } from 'logger'

const styles = theme => ({
  addButton: {
    color: blue,
    marginTop: theme.spacing.unit,
  },
  bull: {
    fontSize: '0.7em',
    color: 'white',
  },
  createEditWrapper: {
    display: 'flex',
    flexflow: 'row nowrap',
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120
  },
  icon: {
    color: 'white',
    // margin: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: 200,
  },
  viewPhoneType: {
    color: 'rgb(200, 200, 200)'
  },
  viewWrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    padding: '10px 0 10px 0'
  }
})

type Props = {
  phones: Array<{
    _id: string,
    phoneNumber: string,
    phoneType: string,
  }>,
  addPhone: () => void,
  action: string,
  classes: {
    addButton: string,
    createEditWrapper: string,
    icon: string,
    bull: string,
    viewPhoneType: string,
    viewWrapper: string,
  },
  handleUpdate: () => void
}

class PhonesContainer extends Component<Props> {

  componentDidMount() {
    let phones = this.props.phones
    if (phones.length === 0) {
      this.props.addPhone()
    }
  }

  renderPhones = () => {

    const { action, addPhone, classes, handleUpdate, phones } = this.props

    return phones.map(p => {
      if (action === CREATE || action === EDIT) {
        return (
          <PhoneCreateEdit
            _id={p._id}
            action={action}
            addPhone={addPhone}
            classes={classes}
            key={p._id}
            handleUpdate={handleUpdate}
            phoneNumber={p.phoneNumber}
            phoneType={p.phoneType}
          />
        )
      } else if (action === VIEW) {
        return (
          <PhoneView
            classes={classes}
            phoneNumber={p.phoneNumber}
            phoneType={p.phoneType}
          />
        )
      } else {
        red('ERROR Phones.js', `Unknown action '${action}'`)
      }
    })
  }

  render() {
    const { action, classes, handleUpdate, phones } = this.props
    return (
      <div>
        {this.renderPhones()}
      </div>
    )
  }



}
export default withStyles(styles)(PhonesContainer)
