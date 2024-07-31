export default {
  name: 'custom cxr',
  transformMode: 'web',
  setup (global) {
    const options = {}
    console.log(' vitest - env - cxr')
    global.localStorage = {
      getItem (key) {
        return options[key]
      },
      setItem (key, value) {
        options[key] = value
        console.log(options, 'options')
      },
    }

    return {
      teardown () {
        // called after all tests with this env have been run
      },
    }
  },
}
