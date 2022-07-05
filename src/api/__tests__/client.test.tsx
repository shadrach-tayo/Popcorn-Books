import { server } from "../../test/server"
import { client } from "../client"
import { APIKEY, API_URL } from "../constants"
import { rest } from "../../test/server"
import { getRandomBook } from "../../test/data/booksDb"

test("It sends request to server", async () => {
  const endpoint = `test`
  const mockResult = { success: true };

  server.use(
    rest.get(`${API_URL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult))
    })
  )

  const result = await client(`${API_URL}/${endpoint}`)
  expect(result).toMatchObject(mockResult)
})

test("Server returns a list of books", async () => {
  const endpoint = `q=joy&maxResult=5&key=${APIKEY}`
  const result = await client(`${API_URL}?${endpoint}`)
  expect(result.kind).toEqual('books#volumes')
})

test("Server returns a single book", async () => {
  const book = getRandomBook();
  const endpoint = `/${book.id}?key=${APIKEY}`
  const result = await client(`${API_URL}${endpoint}`)
  expect(result).toMatchObject(book)
})

test("Promise rejects correctly if there's an error", async () => {
  const endpoint = `error`
  const testError = { error: { message: "Promise rejects correctly"}};

  server.use(
    rest.get(`${API_URL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.status(400), ctx.json(testError))
    })
  )

  const result = await client(`${API_URL}/${endpoint}`).catch(e => e)
  expect(result).toEqual(testError.error.message)
})

test("Promise rejects with default error message", async () => {
  const endpoint = `error`
  const defaultError = "Failed to fetch";

  server.use(
    rest.get(`${API_URL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.status(400), ctx.json({}))
    })
  )

  const result = await client(`${API_URL}/${endpoint}`).catch(e => e)
  expect(result).toEqual(defaultError)
})