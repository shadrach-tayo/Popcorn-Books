import { API_URL } from "../../src/api/constants";
import { queryBook, queryBooks } from "../../src/test/data/booksDb";
import { errors } from "../support/e2e";


describe('smoke it all', () => {

  it('should allow user to visit site', () => {
    cy.intercept('GET', `${API_URL}*`, async (req) => {
      console.log('query================================: ', req.query);
      req.continue((res) => {
        const query = req.query['q'] as string

        const result = queryBooks(query);
        return res.send(result)
      })
    }).as('search')

    cy.intercept('get', `${API_URL}/:bookId`, async (req, res, ctx) => {
      const { bookId } = req.params as { bookId: string };
      const book = queryBook(bookId);
      if (!book) {
        return res(ctx.status(400), ctx.json(errors.noBook))
      }
      return res(ctx.json(book))
    })

    cy.visit('/')

    cy.findByRole("navigation").within(() => {
      cy.findByRole("link", { name: /discover/i }).click()
    })

    cy.findByRole("main").within(() => {
      cy.findByRole("searchbox").type("joy")
      cy.wait('@search')
      cy.findByRole("listitem", { name: /the book of joy/i })
        .within(() => {
          cy.findByRole("button", { name: /add to list/i }).click()
        })
    })

    cy.findByRole("navigation").within(() => {
      cy.findByRole("link", { name: /reading/i }).click()
    })

    // within main
    // asset we have one listItem
    // click on the list item to navigate to the details page
    cy.findByRole('main')
      .within(() => {
        cy.findAllByRole('listitem').should('have.length', 1)
        cy.findByRole('listitem', { name: /the book of joy/i }).click()
      })

    // type a note in the textbox
    cy.findByRole('textbox').type('the book of joy notes')
    // click on the mark as read button
    cy.findByRole('button', { name: /mark as read/i }).click()

    // navigate to the finished page
    cy.findByRole("navigation").within(() => {
      cy.findByRole("link", { name: /finished/i }).click()
    })

    // asset we have one list item
    // click on the listitem to open books page
    cy.findByRole('main')
    .within(() => {
        cy.findAllByRole('listitem').should('have.length', 1)
        cy.findByRole('listitem', { name: /the book of joy/i }).click()
      })

    // click on the remove from list button
    cy.findByRole('button', { name: /remove from list/i }).click()
    // asset that textbox does not exist
    cy.findByRole('textbox').should('not.exist')
    // asset that the timeframe does not exist
    // navigate to the finished page
    cy.findByRole("navigation").within(() => {
      cy.findByRole("link", { name: /finished/i }).click()
    })
    // asset that we have no list item there
    cy.findByRole('main')
      .within(() => {
        cy.findAllByRole('listitem').should('have.length', 0)
      })
  })
})
