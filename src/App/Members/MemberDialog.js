import React, {Component} from 'react'
import Dialog, { DialogTitle } from 'material-ui/Dialog'

class MemberDialog extends Component {


  render() {
    const { ...other } = this.props
    return (
      <Dialog {...other}>
        <DialogTitle id='dt-test'>Dialog Title</DialogTitle>
      </Dialog>
    )
  }
}

export default MemberDialog
