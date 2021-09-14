import { myfunc } from "./source/main"

let mockedHello = "unset"

jest.mock("./source/datasource", () => ({
    getData: () => ({
        hello: mockedHello
    })
}));

describe('simple', () => {
    it('test 1', () => {

        mockedHello = "mocked"

        const result = myfunc()

        expect(result.hello).toBe("mocked")
    })

    it('test 2', () => {

        mockedHello = "mocked2"

        const result = myfunc()

        expect(result.hello).toBe("mocked2")
    })
})