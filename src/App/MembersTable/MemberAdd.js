import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import shortid from 'shortid'
import Phone from './Phone'
import { clone } from 'ramda'
import { yellow } from 'logger'
import H1 from 'elements/H1'
import H2 from 'elements/H2'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

class MemberAdd extends Component {
  constructor(props) {
    super(props)
    const id = shortid.generate()
    this.state = {
      firstName: '',
      lastName: '',
      exempt: false,
      isGoing: false,
      avoidRoles: [],
      comment: '',
      phones: [
        { id: id, type: 'mobile', number: '' },
      ],
      email: '',
    }
  }

  handleTypeChange = (id, type) => {
    yellow(`id=${id}, type=${type}`)
    const { phones } = this.state
    let newPhones = clone(phones)
    const index = newPhones.findIndex((p, index) => p.id === id)
    newPhones[index].type = type
    this.setState({
      phones: newPhones
    })
  }
  handleNumberChange = (id, number) => {
    yellow(`id=${id}, type=${number}`)
    const { phones } = this.state
    let newPhones = clone(phones)
    const index = newPhones.findIndex((p, index) => p.id === id)
    newPhones[index].number = number
    this.setState({
      phones: newPhones
    })
  }

  handleInputChange = name => e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value

    // const name = target.name
    // yellow('name', name)
    this.setState({
      [name]: value
    })
  }

  handleAddPhoneClick = () => {
    // yellow('addPhoneClick')
    const { phones } = this.state
    let newPhones = clone(phones)
    newPhones.push({ id: shortid.generate(), type: 'mobile', number: '' })
    this.setState({
      phones: newPhones,
    })
  }
  renderPhones = () => {
    const phones = this.state.phones
    return phones.map((p, index) => {
      return (<Phone key={index} id={p.id} type={p.type} number={p.number} handleTypeChange={this.handleTypeChange} handleNumberChange={this.handleNumberChange} />)
    })
  }
  render() {

    return (
      <div>
        <H1>Add Member</H1>
        <TextField type='text' name='firstName' placeholder='first name' onChange={(e) => this.handleInputChange(e)} />
        <TextField type='text' name='lastName' placeholder='last name' onChange={(e) => this.handleInputChange(e)} />
        <H2>Roles</H2>
        <FormControlLabel
          label="Exempt"
          control={
            <Switch
              checked={this.state.exempt}
              onChange={this.handleInputChange('exempt')}
              value="exempt"
              color="secondary"
            />
          }
          label="Exempt"
        />
        <H2>Comment</H2>
        <textarea rows='4' cols='50' name='comment' placeholder='comments' onChange={this.handleInputChange} /><br/>
        <H2>Phone</H2>
        <button onClick={this.handleAddPhoneClick}>Add Phone</button>
        {this.renderPhones()}

      </div>

    )
  }
}
MemberAdd.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default MemberAdd
