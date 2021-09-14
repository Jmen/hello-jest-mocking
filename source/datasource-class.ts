export class DataSource {

  public async getData(input: String) {
    return {
        hello: `real ${input}`
    }
  }
}
