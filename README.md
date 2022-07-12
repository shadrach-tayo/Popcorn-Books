# Context
You can view the live app [here](https://ubiquitous-cuchufli-da85ef.netlify.app/)

This project aims to showcase how to build a modern UI application with typescript and react
while taking advantage of various patterns, modern tools and libraries. building reusable UI components etc
This Repo shows how to use these patterns, tools and combine them together to build a modern react-typescript app
- Hooks
- Compound components
- Context api
- Redux-toolkit
- React-query (and it's caching strategies)
- React suspense api
- Error handling with react-error-boundary
- and more

## Testing
This project aims to show how to test your react apps at different levels of testing like
1. unit testing (unit test import functions using jest)
2. testing custom hooks
3. integration testing
4. end-2-end testing

##### I used the following testing tools
- [Jest](https://jestjs.io/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [msw (to mock gooogle books api)](https://mswjs.io/)
## How to Run
- Clone the github repo using this command `git clone https://github.com/shadrach-tayo/Popcorn-Books.git`
- Get your Google books api key from your [google cloud console](https://console.cloud.google.com/apis/api/books.googleapis.com)
- Create a ``.env`` file, copy and paste the content of the ``.env.example`` file, then paste your google books api key

In the project directory, you can run: `npm start`

### Conditions of satisfaction
-  User can type in a query and see a list of 5 books matching that query.
- Each item in the list should include the book's author, title, and publishing company.
- A user should be able to select a book from the five displayed to save to a “Reading List”
- User can view a “Reading List” with all the books the user has selected from their queries -- this is a local reading list and not tied to Google Books’s account features.

### Libraries and frameworks used
- React
- Typescript
- Redux-toolkit
- React-query
- React-router
- Msw

### APIs
- [Google Books volumes api]("https://www.googleapis.com/books/v1/volumes") - [Documentation](https://developers.google.com/books/docs/v1/using#RetrievingVolume)