import { config } from './config'

export function tellAge () {
  if (config.allowTellAge) {
    return 18
  }

  return '就不告诉你'
}

export function tellByFunction () {
  return config.getAge() === 165 ? '165岁' : '不是165岁'
}
