export class View {
  count = 1
  render () {
    Promise.resolve()
      .then(() => {
        this.count = 2
      })
      .then(() => {
        this.count = 3
      })
  }
}
