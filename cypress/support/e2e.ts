// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-hmr-restarter'
import '@testing-library/cypress/add-commands'


// import * as Testserver from "../../src/test/server/test-server"
import { ByRoleMatcher, ByRoleOptions } from '@testing-library/react'

declare global {
  namespace Cypress {
    interface Chainable {
      findByRole(role: ByRoleMatcher, options?: ByRoleOptions): Chainable<void>
      findAllByRole(role: ByRoleMatcher, options?: ByRoleOptions): Chainable<void>
      // interceptRequest(type: string, route: string, ...args: any[])
    }
  }
}


export const errors = {
  noBook: {
    error: {
      code: 400,
      message: "Missing query.",
      "errors": [
        {
          message: "Book not found.",
          "domain": "global",
          "reason": "queryRequired",
        }
      ]
    }
  },
  missingQuery: {
    error: {
      code: 400,
      message: "Missing query.",
      "errors": [
        {
          message: "Missing query.",
          "domain": "global",
          "reason": "queryRequired",
          "location": "q",
          "locationType": "parameter"
        }
      ]
    }
  },
  requiredParam: {
    error: {
      code: 400,
      message: "Required parameter: q",
      "errors": [
        {
          message: "Required parameter: q",
          "domain": "global",
          "reason": "required"
        }
      ]
    }
  }
}