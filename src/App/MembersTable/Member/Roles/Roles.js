import React, { Component } from 'react'
import Role from './Role'
import SubHeading from 'elements/SubHeading'
import { green } from 'logger'

const Roles = ({ handleUpdate, roles}) => {
  const renderRoles = roles.map(r => {
    green('r.avoid', r.avoid)
    return (
      <Role
        key={r._id}
        _id={r._id}
        handleUpdate={handleUpdate}
        name={r.name}
        avoid={r.avoid}
      />
    )
  })

  return (
    <div>
      <SubHeading>Roles</SubHeading>
      {renderRoles}
    </div>
  )
}

export default Roles
