import { DataSource } from "./datasource-class"

export const myfunc = async (input: String) => {

    const datasource = new DataSource()

    return await datasource.getData(input)
}