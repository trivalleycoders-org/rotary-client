import React from 'react'

import TR from 'elements/TR'
import TD from 'elements/TD'

const Member = ({ comments, exempt, avoidRoles, phone, _id, firstName, lastName, email }) => {
  return (
    <TR>
      <TD>{firstName}</TD>
      <TD>{lastName}</TD>
      <TD>{exempt}</TD>
      <TD>{avoidRoles}</TD>
      <TD>{comments}</TD>
      <TD>{phone}</TD>
      <TD>{email}</TD>
    </TR>
  )
}
export default Member
