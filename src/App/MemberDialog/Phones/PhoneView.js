import React from 'react'
import PhoneIcon from       '@material-ui/icons/Phone'
import Body1 from 'elements/Body1'
import { green } from 'logger'

const PhoneView = ({ classes, phoneNumber, phoneType }) => {
  return (
    <div className={classes.viewWrapper}>
      <p>Phone view</p>
      <PhoneIcon className={classes.icon}>phone</PhoneIcon>
      <Body1 noGutter>{phoneNumber}</Body1><span className={classes.bull}>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</span><Body1 noGutter><span className={classes.viewPhoneType}>{phoneType}</span> </Body1>
    </div>
  )
}

export default PhoneView
