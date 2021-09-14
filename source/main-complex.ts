import { DataSource } from "./datasource-complex"

export const myfunc = async (input: String) => {

    const datasource = new DataSource()

    const data = await datasource.getData()

    return data.hello(input)
}