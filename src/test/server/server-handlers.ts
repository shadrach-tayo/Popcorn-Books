import { rest } from "msw";
// import { match } from "node-match-path";
import { API_URL } from "../../api/constants";
// import { APIKEY } from "../../api/constants";
import { queryBook, queryBooks } from "../data/booksDb";

export const handlers = [
  rest.get(`${API_URL}`, async (req, res, ctx) => {
    if (!req.url.searchParams.has('q')) {
      return res(ctx.status(400), ctx.json(errors.requiredParam))
    }
    
    const query = req.url.searchParams.get('q')
    
    if (!query) {
      return res(ctx.status(400), ctx.json(errors.missingQuery))
    }
    
    const result = queryBooks(query);
    return res(ctx.json(result))
  }),

  rest.get(`${API_URL}/:bookId`, async (req, res, ctx) => {
    const {bookId} = req.params as { bookId: string };
    const book = queryBook(bookId);
    if (!book) {
      return res(ctx.status(400), ctx.json(errors.noBook))
    }
    return res(ctx.json(book))
  })
];

// const getToken = (req: Request) => req.headers.get('Authorization')?.replace('Bearer ', '')

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