import React from 'react'
import { yellow } from 'logger'

const Phone = ({ id, type, number, handleTypeChange, handleNumberChange }) => {
  return (
    <div>
      <select value={type} name='phone2' onChange={(e) => handleTypeChange(id, e.target.value)}>
        <option value='mobile' selected>Mobile</option>
        <option value='home' >Home</option>
        <option value='work'>Work</option>
      </select>
      <input type='text' name='phone2' placeholder='phone number' value={number} onChange={(e) => handleNumberChange(id, e.target.value)}/> id={id}
    </div>
  )
}
export default Phone
