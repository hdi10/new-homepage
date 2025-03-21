import React from 'react'
import ServiceOverview from './ServiceOverview'

describe('<ServiceOverview />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ServiceOverview />)
  })
})