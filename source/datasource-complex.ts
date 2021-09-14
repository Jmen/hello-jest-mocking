export class DataSource {

  public async getData() {
    return {
        hello: (input) => {
            return Promise.resolve("real " + input)
        }
    }
  }
}
