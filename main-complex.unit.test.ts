describe('test-complex', () => {

    beforeEach(() => {
        jest.resetModules()
    })

    function given(input) {
        let mockedHello = jest.fn().mockReturnValue(input)

        jest.mock("./source/datasource-complex", () => ({
            DataSource: jest.fn().mockImplementation(() => ({
                getData: jest.fn().mockImplementation(async () => ({
                    hello: mockedHello
                }))
            }))
        }))

        return mockedHello;
    }

    it('test 1', async () => {
        let mockedHello = given("mocked-hello-return");

        const { myfunc } = require("./source/main-complex")

        const result = await myfunc("test-input")

        expect(mockedHello).toBeCalledWith("test-input")
        expect(result).toBe("mocked-hello-return")
    })


    it('test 2', async () => {
        let mockedHello = given("mocked-hello-return-2");

        const { myfunc } = require("./source/main-complex")

        const result = await myfunc("test-input-2")

        expect(mockedHello).toBeCalledWith("test-input-2")
        expect(result).toBe("mocked-hello-return-2")
    })
})