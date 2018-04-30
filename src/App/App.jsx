import React from 'react';
import Section from 'elements/Section'
import Members from './Members'


const App = (props) => {
  return (
    <div>
      <Section className={props.className}>
        <h1>Hello</h1>
      </Section>
      <Section>
        <Members />
      </Section>
    </div>
  )
}

export default App;
