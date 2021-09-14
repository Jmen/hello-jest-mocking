export class DataSource {

    public async getData(input: String) {
        return {
            hello: `real input ${input}`
        }
    }

    public async saveData(input: String) {
        return {
            saved: `real saved ${input}`
        }
    }
}
