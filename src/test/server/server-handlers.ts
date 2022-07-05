import { rest } from "msw";
import { match } from "node-match-path";
import { API_URL } from "../../api/constants";
import { APIKEY } from "../../api/constants";

export const handlers = [
  rest.get(`${API_URL}`, async (req, res, ctx) => {
    return res(ctx.json({ success: true }))
  })
];

const getToken = (req: Request) => req.headers.get('Authorization')?.replace('Bearer ', '')