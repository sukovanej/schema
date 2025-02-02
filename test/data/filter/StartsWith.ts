import { pipe } from "@effect/data/Function"
import * as P from "@effect/schema/Parser"
import * as S from "@effect/schema/Schema"

describe.concurrent("startsWith", () => {
  it("Guard", () => {
    const schema = pipe(S.string, S.startsWith("a"))
    const is = P.is(schema)
    expect(is("a")).toEqual(true)
    expect(is("ab")).toEqual(true)

    expect(is("")).toEqual(false)
    expect(is("b")).toEqual(false)
  })
})
