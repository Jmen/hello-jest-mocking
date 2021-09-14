jest.mock('./source/datasource')

describe('manual mock', () => {
    it('test', () => {

        const { myfunc } = require("./source/main")
        const result = myfunc()

        expect(result.hello).toBe("mocked")
    })
})