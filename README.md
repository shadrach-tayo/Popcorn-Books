# Context
This Project is a solution my popcorn network interview task
You can view the live app [here](https://ubiquitous-cuchufli-da85ef.netlify.app/)

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

### APIs
- [Google Books volumes api]("https://www.googleapis.com/books/v1/volumes") - [Documentation](https://developers.google.com/books/docs/v1/using#RetrievingVolume)