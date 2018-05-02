import React, { Component } from 'react'
import Phone from './Phone'

class MemberAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      exempt: false,
      avoidRoles: [],
      comments: [],
      phoneType: '',
      phoneNumber: '',
      email: '',
    }
  }
  render() {
    return (
      <div>
        <h1>Add Member</h1>
        <input type='text' name='firstName' placeholder='first name' />
        <input type='text' name='lastName' placeholder='last name' />
        <div>roles go here as a component not yet built</div>
        <textarea rows='4' cols='50' name='comment' placeholder='comments' /><br/>
        <Phone />

      </div>

    )
  }
}
export default MemberAdd
