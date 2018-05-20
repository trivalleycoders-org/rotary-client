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

class PhonesContainer extends Component {

  componentDidMount() {
    green('PhonesContainer.componentDidMount(): props', this.props)
    let phones = this.props.phones
    if (phones.length === 0) {
      green('phones is zero')
      // phones.push({ _id: shortid.generate(), phoneType: 'mobile', phoneNumber: '' })
      this.props.addPhone()
    }
    // const { phones } = this.props
    // // green('props', this.props)
    // green('length', phones.length)
    // if (phones.length === 0 ) {
    //   phones.push({ phoneType: 'mobile', phoneNumber: ''})
    // }
    this.setState({
      phones: phones,
    })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    green('PhonesContainer.componentDidUpdate(): props', this.props)
  }
  // addClick = () => {
  //   green('addClick')
  //   const oldPhones = [...this.state.phones]
  //   const newPhones = append({ _id: shortid.generate(), phoneType: 'mobile', phoneNumber: '' }, oldPhones)
  //   green('newPhones', newPhones)
  //   this.setState({
  //     phones: newPhones,
  //   })
  // }

  renderPhones = () => {
    const { action, addPhone, classes, handleUpdate, phones } = this.props
    return phones.map(p => {
      green('p', p)
      if (action === CREATE || action === EDIT) {
        return (
          <PhoneCreateEdit
            _id={p._id}
            action={action}
            addPhone={this.addPhone}
            classes={this.props.classes}
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
    green('PhonesContainer.render()')
    return (
      <div>
        {this.renderPhones()}
      </div>
    )
  }



}
export default withStyles(styles)(PhonesContainer)
