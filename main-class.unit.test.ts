describe('test-class', () => {

    beforeEach(() => {
        jest.resetModules()
    })

    function given(input) {
        let mockedGetData = jest.fn().mockReturnValue(input)

        jest.mock("./source/datasource-class", () => ({
            DataSource: jest.fn().mockImplementation(() => ({
                getData: mockedGetData
            }))
        }))

        return mockedGetData;
    }

    it('test 1', async () => {
        let mockedGetData = given("mocked-hello-return");

        const { myfunc } = require("./source/main-class")

        const result = await myfunc("test-input")

        expect(mockedGetData).toBeCalledWith("test-input")
        expect(result).toBe("mocked-hello-return")
    })


    it('test 2', async () => {
        let mockedGetData = given("mocked-hello-return-2");

        const { myfunc } = require("./source/main-class")

        const result = await myfunc("test-input-2")

        expect(mockedGetData).toBeCalledWith("test-input-2")
        expect(result).toBe("mocked-hello-return-2")
    })
})