import React from 'react';
import Section from 'elements/Section'


const App = (props) => {
  return (
    <div>
      <Section className={props.className}>
        <h1>Hello</h1>
      </Section>
    </div>
  )
}

export default App;
