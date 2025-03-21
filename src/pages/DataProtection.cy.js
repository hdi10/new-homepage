import React from 'react'
import DataProtection from './DataProtection'

describe('<DataProtection />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DataProtection />)
  })
})