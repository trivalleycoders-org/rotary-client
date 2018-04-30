import React from 'react'
import styled from 'styled-components'
import Table from 'elements/Table'
import TR from 'elements/TR'
import TH from 'elements/TH'
import TD from 'elements/TD'
import H1 from 'elements/H1'
import Curly from 'elements/Curly'
import Pre from 'elements/Pre'
import Code from 'elements/Code'
import iClick from './media/click.svg'
import Section from 'elements/Section'

const ClickImg = styled.img `
  max-width: 50px;
`

const ReduxFlowTbl = () => {
  return (
    <Section>
      <H1>Redux Flow Terms</H1>
      <Table>
        <TR>
          <TH>Concept</TH>
          <TH>Example</TH>
          <TH>Description</TH>
        </TR>
        <TR>
          <TD>User interaction</TD>
          <TD><ClickImg src={iClick} alt='mouse click'/>
          </TD>
          <TD>Any user interaction that changes state.</TD>
        </TR>
        <TR>
          <TD>
            <Curly>Action</Curly>
          </TD>
          <TD>
            <Pre
              language='js'

              code={[
                '{',
                "  type: 'updateUser',",
                "  payload: data,",
                '}'
              ]}
            />

          </TD>
          <TD>Actions describe what happened or needs to happen such as 'updateUser'. An action is an object with a type property that specifies the identifier for the action. 'type' is required. Actions do not need to include data but frequently do. The property name for the data is typically 'payload' and can be any data type.</TD>
        </TR>
        <TR>
          <TD>Action creator</TD>
          <TD><Pre
            language='js'
            code={[
              "export const updateUser = () => {",
              "  return (",
              '    {',
              "      type: 'updateUser',",
              "      payload: data,",
              '    }',
              "  (",
              "}",
            ]}
              /></TD>
          <TD>An 'action creator' is just a function that returns an action. Using the function means you don't need to type the action multiple times throughout your code.</TD>
        </TR>
        <TR>
          <TD><Code code={"store.dispatch()"} /></TD>
          <TD><Code code={"store.dispatch({ type: 'updateUser' })"} language='js' /></TD>
          <TD><Code code={'dispatch()'} /> sends actions to reducers.</TD>
        </TR>
        <TR>
          <TD>fn(reducers)</TD>
          <TD><Pre
            language='js'
            code={[
              "export const userReducer = ({ type, payload }) => {",
              "  switch (type) {",
              "    case 'updateUser':",
              "      // modify state code here then",
              "      return newState",
              "    case 'delete':",
              "      // modify state code here then",
              "      return newState",
              "    default:",
              "      return state",
              "  }",
              "}",
            ]}
              />
          </TD>
          <TD>Reducers are the only part of your code that can (should) modify state. Reducers get passed state. A reducer will modify state if the action is on it needs to act on. If it does not want to modify the state it must return state or state will become null. Reducers must be 'pure' functions</TD>
        </TR>
        <TR>
          <TD>Store / State</TD>
          <TD><Pre
            language='js'
            code={[
              "{",
              "  user: {",
              "    id: 1234",
              "    first: 'Karen',",
              "    last: Silver,",
              "  }",
              "  address: {",
              "    street: 'Some Place',",
              "    city: 'Your Town',",
              "  }",
              "}",
            ]}
              /></TD>
          <TD>Straight from the Redux documentation: A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it. A store is not a class. It's just an object with a few methods on it.</TD>
        </TR>
      </Table>
    </Section>
  )
}
export default ReduxFlowTbl
