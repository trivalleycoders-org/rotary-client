import React from 'react'
import Section from 'elements/Section'
import H1 from 'elements/H1'
import H2 from 'elements/H2'
import Code from 'elements/Code'
import Callout from 'elements/Callout'

const GeneralPoints = () => {
  return (
    <Section>
      <H1>Additional Points</H1>
      <H2>Reducers Must be Pure</H2>
      <ul>
        <li>Don't mutate the reducers arguments.</li>
        <li>don't perform side effects like API calls</li>
        <li>Don't call non-pure functions like <Code code="Date.new()" /> or <Code code="Math.random()" /></li>
      </ul>
      <Callout info>
        <p>In computer programming, a function may be considered a pure function if both of the following statements about the function hold:</p>
        <ol>
          <li>The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program, nor can it depend on any external input from I/O devices (usually—see below).</li>
          <li>Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices (usually—see below).</li>
        </ol>
        <p>The result value need not depend on all (or any) of the argument values. However, it must depend on nothing other than the argument values. The function may return multiple result values and these conditions must apply to all returned values for the function to be considered pure. If an argument is passed by reference, any parameter mutation will alter the value of the argument outside the function, which will render the function impure.[citation needed]</p>

      </Callout>
    </Section>
  )
}
export default GeneralPoints
