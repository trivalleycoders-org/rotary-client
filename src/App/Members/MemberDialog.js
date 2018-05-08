import React, {Component} from 'react'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import Button from 'material-ui/Button'

class MemberDialog extends Component {


  render() {
    const { handleClose, ...other } = this.props
    return (
      <Dialog {...other}>
        <DialogTitle id='dt-test'>Dialog Title</DialogTitle>
        <Button onClick={handleClose}>Close</Button>
      </Dialog>
    )
  }
}

export default MemberDialog
