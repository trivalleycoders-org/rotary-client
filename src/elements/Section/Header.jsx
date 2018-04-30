import React from 'react'
// import classNames from 'classnames'
import styled from 'styled-components'

/*
    > l0 means a section with no title used for organization/symmetry only
    > The default is l1
 */

const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  ${({ l0, l1, l2, l3, l4 }) => {
    if (l4) {
      return `
        font-size: 16px;
        font-weight: bold;
        margin: 16px 0;
      `
    } else if (l3) {
      return `
        font-size: 22px;
        margin: 18px 0;
      `
    } else if (l2) {
      return `
        font-size: 28px;
        margin: 20px 0;
      `
    } else if (l1) {
      return `
        background-color: rgb(50, 50, 50);
        border: 1px solid rgb(35, 35, 35);
        font-size: 28px;
        margin: 15px 0;
        padding: 7px 0;
      `

    } else {
      // no additional styles
    }
  }}
`
const SubTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  ${({ l0, l1, l2, l3, l4 }) => {
    if (l3) {
      return `
        font-size: 18px;
        margin: 16px 0;
      `
    } else if (l2) {
      return `
        font-size: 22px;
        margin: 18px 0;
      `
    } else if (l1) {
      return `
        font-size: 28px;
        margin: 20px 0;
      `
    } else {
      // no additional styles
    }
  }}
`



const Header = ({ title, subTitle, l0, l1, l2, l3, l4, children}) => {

  return (
    <div>
      <Title l0={l0} l1={l1} l2={l2} l3={l3} l4={l4}>{title}</Title>
      <SubTitle l0={l0} l1={l1} l2={l2} l3={l3} l4={l4}>{subTitle}</SubTitle>
      {children}
    </div>
  )
}

export default Header
