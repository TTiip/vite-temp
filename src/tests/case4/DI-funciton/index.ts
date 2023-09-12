import { readFileSync } from 'fs'
import { type FileReaderType, readAndProcessFile } from './readAndProcessFile'

class FileReader implements FileReaderType {
  constructor () {}
  read (filePath: string) {
    return readFileSync(filePath, { encoding: 'utf-8' })
  }
}

const result = readAndProcessFile('example.txt', new FileReader())

console.log(result, 'result')
