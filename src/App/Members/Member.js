import React from 'react'
import styled from 'styled-components'
import TR from 'elements/TR'
import TD from 'elements/TD'
import Button from 'elements/Button'
import shortid from 'shortid'
import { yellow } from 'logger'

const CellRow = styled.div``

const Member = ({ comments, exempt, avoidRoles, phone, _id, firstName, lastName, email }) => {

  const renderPhone = phone.map((p) => {
    return (<CellRow key={shortid.generate()}>{`${p.phoneType}: ${p.phoneNumber}`}</CellRow>)
  })

  const renderComments = comments.map((c) => {
    return (<CellRow key={shortid.generate()}>{`${c}`}</CellRow>)
  })
  const renderRoles = avoidRoles.map((r) => {
    return (<CellRow key={shortid.generate()}>{`${r}`}</CellRow>)
  })

  return (
    <TR>
      <TD>{firstName}</TD>
      <TD>{lastName}</TD>
      <TD>{exempt ? 'Yes' : 'No'}</TD>
      <TD>{renderRoles}</TD>
      <TD>{renderComments}</TD>
      <TD>{renderPhone}</TD>
      <TD>{email}</TD>
      <TD><Button>Hello</Button></TD>
    </TR>
  )
}
export default Member
