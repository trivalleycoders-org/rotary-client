import React, { Component } from 'react'
import shortid from 'shortid'
import Phone from './Phone'
import { clone } from 'ramda'
import { yellow } from 'logger'

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

  handleInputChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleAddPhoneClick = () => {
    yellow('addPhoneClick')
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
        <h1>Add Member</h1>
        <input type='text' name='firstName' placeholder='first name' onChange={(e) => this.handleInputChange(e)} />
        <input type='text' name='lastName' placeholder='last name' onChange={(e) => this.handleInputChange(e)} />
        <h2>Roles</h2>
        <label htmlFor='exempt'>Exempt </label><input name='exempt' type='checkbox'  checked={this.state.exempt} onChange={this.handleInputChange} />
        <h2>Comment</h2>
        <textarea rows='4' cols='50' name='comment' placeholder='comments' onChange={this.handleInputChange} /><br/>
        <h2>Phone</h2>
        <button onClick={this.handleAddPhoneClick}>Add Phone</button>
        {this.renderPhones()}

      </div>

    )
  }
}
export default MemberAdd
