import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import deepOrange from 'material-ui/colors/deepOrange'
import deepPurple from 'material-ui/colors/deepPurple'

const styles = theme => ({
  avatar: {
   margin: 10,
  },
  orangeAvatar: {
   margin: 10,
   color: '#fff',
   backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
   margin: 10,
   color: '#fff',
   backgroundColor: deepPurple[500],
  },

})

const AvatarWrapped = ({ classes, children }) => {
  return (
    <Avatar className={classes.avatar}>{children}</Avatar>
  )
}

export default withStyles(styles)(AvatarWrapped)
