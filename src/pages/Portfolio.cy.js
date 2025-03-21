import React from 'react'
import Portfolio from './Portfolio'

describe('<Portfolio />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Portfolio />)
  })
})