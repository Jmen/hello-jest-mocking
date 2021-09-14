import { DataSource } from "./datasource-partial"

export const myfunc = async (input: String) => {

    const datasource = new DataSource()

    const read = await datasource.getData(input)

    const save = await datasource.saveData(read.hello)

    return {
        read,
        save
    }
}