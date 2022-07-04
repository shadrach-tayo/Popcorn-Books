import { formatDate } from "../index"

test("FormatDate helper function", () => {
  expect(formatDate(new Date("February 26, 1999"))).toEqual("Feb 99")
})