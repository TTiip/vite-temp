import { expect, it } from 'vitest'
import { type FileReaderType, readAndProcessFile } from './readAndProcessFile'

it('read and process file', () => {
  class StubFileReader implements FileReaderType {
    constructor () {}
    read (filePath: string) {
      console.log(filePath, 'filePath')
      return 'cxr'
    }
  }

  const r = readAndProcessFile('./test', new StubFileReader())
  expect(r).toBe('cxr --> test unit')
})
