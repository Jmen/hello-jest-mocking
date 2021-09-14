describe('test-class', () => {

    beforeEach(() => {
        jest.resetModules()
    })

    function given(input) {
        let mockedGetData = jest.fn().mockReturnValue(input)

        jest.mock("./source/datasource-partial", () => ({

            DataSource: jest.fn().mockImplementation(() => ({
                ...jest.requireActual('./source/datasource-partial').saveData,
                getData: mockedGetData
            }))
        }))

        return mockedGetData;
    }

    it('test 1', async () => {
        let mockedGetData = given("mocked-getData-return");

        const { myfunc } = require("./source/main-partial")

        const result = await myfunc("test-input")

        expect(mockedGetData).toBeCalledWith("test-input")

        expect(result).toBe({
            read: "mocked-getData-return",
            saved: `real saved mocked-getData-return`
        })
    })

    // it('test 2', async () => {
    //     let mockedGetData = given("mocked-hello-return-2");
    //
    //     const { myfunc } = require("./source/main-partial")
    //
    //     const result = await myfunc("test-input-2")
    //
    //     expect(mockedGetData).toBeCalledWith("test-input-2")
    //     expect(result).toBe("mocked-hello-return-2")
    // })
})