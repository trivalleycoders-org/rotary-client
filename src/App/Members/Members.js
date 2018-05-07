
import Button from 'material-ui/Button'
import {connect} from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import * as requestSelectors from 'store/request-selectors'
import { requestKeyReadMembers } from '../../constants'
import Section from 'elements/Section'

import MemberAdd from './MemberAdd'
import MemberDialog from './MemberDialog'
import MembersTable from './MembersTable'

import {yellow} from 'logger'

let refresh = true

class Members extends Component {
  state = {
    open: false,
    tableRows: null,
  }

  componentDidMount() {
    this.props.thunkRequestReadMembers()

  }
  // event, _id
  handleOpenClick = (e, id) => {
    yellow('table row click', id)
    // yellow('event', event.target)

    this.setState({
      open: true,
    })
    refresh = false
  }

  handleClose = value => {
    this.setState({ selectedValue: value, open: false })
    refresh = true
  }

  rows = () => {
    return this.props.members.map(m => {
      return (
        <Member
          key={m._id}
          _id={m._id}
          firstName={m.firstName}
          lastName={m.lastName}
          comments={m.comments}
          exempt={m.exempt}
          roles={m.roles}
          phone={m.phone}
          email={m.email}
          handleOpenClick={this.handleOpenClick}
        />
      )
    })
  }
  // handleAddMemberClick = () => {}

  render() {
    const {members, readMembersStatus} = this.props
    if (readMembersStatus !== 'success') {
      return (<h1>Loading...</h1>)
    }
    let rows
    if (refresh) {
      rows = this.rows()
    }
    return (
      <Section title='Members' l1="l1">

        {/* <Button variant='raised' color='primary' onClick={this.handleAddMemberClick}>
          Add Member
        </Button> */}
        {/* <MemberAdd/> */}

        <MemberDialog
          open={this.state.open}
        />
      </Section>
    )
  }
}

const mapStateToProps = (state) => {

  const o = {
    readMembersStatus: requestSelectors.getRequestStatus(state, requestKeyReadMembers),
    members: memberSelectors.getMembers(state)
  }
  return o
}

export default connect(mapStateToProps, memberActions)(Members)

// export default compose(
//   withStyles(styles, { name: 'Members' }),
//   connect(mapStateToProps, memberActions)
// )(Members)
