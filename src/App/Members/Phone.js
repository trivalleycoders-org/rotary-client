import React, { Component } from 'react'
import { yellow } from 'logger'

class Phone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumbers: [],
      phone1Value: {
        type: 'mobile',
        value: '',
      },
      phone2Value: '',
    }
  }

  updatePhoneNumbers = () => {
    let numbers = this.state.phoneNumbers

  }
  handleSelectChange = (e) => {
    yellow('handleSelectChange')

    const key = `${e.target.name}Value`
    const value = e.target.value
    yellow(`${key}:${value}`)
    this.setState({
      [key]: value,
    })
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor='phone1'>Phone 1: </label>
          <select value={this.state.phone1Value}name='phone1' onChange={(e) => this.handleSelectChange(e)}>
            <option value='mobile'>Mobile</option>
            <option value='home' >Home</option>
            <option value='work'>Work</option>
          </select>
          <input type='text' name='phone1' placeholder='phone number' />
        </div>
        <div>
          <label htmlFor='phone2'>Phone 2: </label>
          <select value={this.state.phone2Value} name='phone2' onChange={(e) => this.handleSelectChange(e)}>
            <option value=''>select</option>
            <option value='mobile' selected>Mobile</option>
            <option value='home' >Home</option>
            <option value='work'>Work</option>
          </select>
          <input type='text' name='phone2' placeholder='phone number' />
        </div>
      </div>
    )
  }
}
export default Phone
