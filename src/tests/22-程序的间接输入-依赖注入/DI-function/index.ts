import { readFileSync } from 'fs'
import type { FileReader } from './readAndProcessFile'
import { readAndProcessFile } from './readAndProcessFile'

class TextFileReader implements FileReader {
  read (filePath: string) {
    return readFileSync(filePath, { encoding: 'utf-8' })
  }
}

const result = readAndProcessFile('example.txt', new TextFileReader())

console.log(result)
