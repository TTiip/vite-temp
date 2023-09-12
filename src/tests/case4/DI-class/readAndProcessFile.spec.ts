import { describe, expect, it } from 'vitest'
import { type FileReaderType, ReadAndProcessFile, ReadAndProcessFile1, ReadAndProcessFile2 } from './readAndProcessFile'

describe('DI-class', () => {
  it('构造函数', () => {
    class FileReaderCustomer implements FileReaderType {
      constructor () {}
      read (filePath: string) {
        console.log(filePath, 'filePath')
        return 'cxr'
      }
    }
    const r = new ReadAndProcessFile(new FileReaderCustomer()).run('aaa.json')
    expect(r).toBe('cxr --> unit test')
  })

  it.todo('属性', () => {
    class FileReaderCustomer implements FileReaderType {
      constructor () {}
      read (filePath: string) {
        console.log(filePath, 'filePath')
        return 'cxr'
      }
    }

    const rr = new ReadAndProcessFile1()
    rr.filRender = new FileReaderCustomer()
    const r = rr.run('test.txt')
    expect(r).toBe('cxr --> unit test')
  })

  it.todo('方法', () => {
    class FileReaderCustomer implements FileReaderType {
      constructor () {}
      read (filePath: string) {
        console.log(filePath, 'filePath')
        return 'cxr'
      }
    }
    const rrr = new ReadAndProcessFile2()
    rrr.setFilRender(new FileReaderCustomer())
    const r = rrr.run('test.txt')
    expect(r).toBe('cxr --> unit test')
  })
})
