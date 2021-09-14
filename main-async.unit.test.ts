import { myfunc } from "./source/main-async"

let mockedHello = "unset"

jest.mock("./source/datasource-async", () => ({
    getData: async () => ({
        hello: mockedHello
    })
}));

describe('async', () => {
    it('test 1', async () => {

        mockedHello = "mocked"

        //const { myfunc } = require("./source/main")
        const result = await myfunc()

        expect(result.hello).toBe("mocked")
    })

    it('test 2', async () => {

        mockedHello = "mocked2"

        //const { myfunc } = require("./source/main")
        const result = await myfunc()

        expect(result.hello).toBe("mocked2")
    })
})