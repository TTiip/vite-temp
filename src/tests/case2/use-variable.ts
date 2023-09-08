import { gold, name } from './config'

function tellName () {
  console.log(gold, 'gold')
  return `${name}-heiheihei`
}

export {
  tellName,
}
