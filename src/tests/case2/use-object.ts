import { config } from './config'

function tellAge () {
  if (config.allowTellAge) {
    return 18
  }

  return '就不告诉你'
}

export {
  tellAge,
}
