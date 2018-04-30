import React from 'react';
import H1 from 'elements/H1'
import Table from 'elements/Table'
import TR from 'elements/TR'
import TH from 'elements/TH'
import TD from 'elements/TD'
import Section from 'elements/Section'
import Pre from 'elements/Pre'
import Code from 'elements/Code'

const OtherTermsTbl = (props) => {
    return (
      <div>
        <Section className={props.className}>

          <H1>Other Terms</H1>
          <Table>
            <TR>
              <TH>Concept</TH>
              <TH>Example</TH>
              <TH>Description</TH>
            </TR>

            <TR>
              <TD>fn(middleware)</TD>
              <TD>redux-thunk</TD>
              <TD>Middleware is functions you can write that called after dispatch and before reducers. Middleware can do whatever you need it to, but is typically use to transform or retrieve data.</TD>
            </TR>

            <TR>
              <TD>fn(subscribe(fn(listener))</TD>
              <TD><Code code='unsubscribe = store.subscribe(handleSubmitClick)' /></TD>
              <TD><Code code='subscribe()' /> takes a callback (i.e., function). The function will be called each time state changes. <Code code='subscribe()' /> returns a function that can be used to unsubscribe.</TD>
            </TR>
            <TR>
              <TD><Code code='store.combineReducers(rootReducer)' /></TD>
              <TD>
                <Pre
                  language='js'
                  code={[
                    "const reducerOne = (state, { type, action}) { ... }",
                    "const reducerTwo = (state, { type, action}) { ... }",
                    "const rootReducer = combineReducers(reducerOne, reducerTwo)",
                  ]}
                />
              </TD>
              <TD><Code code='subscribe()' /> takes a callback (i.e., function). The function will be called each time state changes. <Code code='subscribe()' /> returns a function that can be used to unsubscribe.</TD>
            </TR>
            <TR>
              <TD><Code code="createStore(reducer, [preloadedState], [enhancer])" /></TD>
              <TD><Code code="createStore(rootReducer)" /> </TD>
              <TD>A method that creates the store</TD>
            </TR>
            <TR>
              <TD><Code code="store.getState()" /></TD>
              <TD><Code code="store.getState()" /> </TD>
              <TD>Returnes the complete store.</TD>
            </TR>
          </Table>
        </Section>

      </div>
    );
}

export default OtherTermsTbl;
