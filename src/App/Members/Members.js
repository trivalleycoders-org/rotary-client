import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as memberActions from 'store/member-actions'
import * as memberSelectors from 'store/member-selectors'
import * as requestSelectors from 'store/request-selectors'
import Section from 'elements/Section'
import { log, yellow } from 'logger'

class Members extends Component {

  componentDidMount() {
    yellow('componentDidMount')
    this.props.requestReadMembers()

  }

  render() {
    return (
      <Section>
        <h1>Members</h1>
      </Section>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    readRequestReadMembers: requestSelectors.getRequests(state, 'api/getReadMembers'),
  }
}

export default connect(mapStateToProps, memberActions)(Members)
