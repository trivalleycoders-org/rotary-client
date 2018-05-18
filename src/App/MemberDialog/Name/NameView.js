import React from 'react'
import { TextField } from '@material-ui/core'
import Avatar from 'elements/Avatar'
import Title from 'elements/Title'

const NameView = ({ classes, firstName, lastName}) => {
  return (
    <div className={classes.title}>
      <p>NameView</p>
      <Avatar
        className={classes.avatar}
        >
          {firstName[0]}{lastName[0]}
      </Avatar>
      <Title noGutter>{firstName} {lastName}</Title>
    </div>
  )
}

export default NameView
