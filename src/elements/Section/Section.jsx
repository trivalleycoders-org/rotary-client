import React from 'react'
import Header from './Header'



const Section = ({ title, subTitle, l0, l1, l2, l3, l4, children }) => {
  return (
    <div>
      <Header
        title={title}
        subTitle={subTitle}
        l0={l0}
        l1={l1}
        l2={l2}
        l3={l3}
        l4={l4}
      />
      {children}
    </div>
  )
}

export default Section
