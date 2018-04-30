import React from 'react';
import Section from 'elements/Section'
import ReduxFlow from './ReduxFlow'
import ReduxFlowTbl from './ReduxFlowTbl'
import OtherTermsTbl from './OtherTermsTbl'
import GeneralPoints from './GeneralPoints'

const App = (props) => {
  return (
    <div>
      <Section className={props.className}>
        <ReduxFlowTbl />
        <ReduxFlow />
      </Section>
      <Section>
        <OtherTermsTbl />
      </Section>
      <GeneralPoints />
    </div>
  )
}

export default App;
