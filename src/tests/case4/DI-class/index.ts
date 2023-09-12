import { readFileSync } from 'fs'
import { type FileReaderType, ReadAndProcessFile, ReadAndProcessFile1, ReadAndProcessFile2 } from './readAndProcessFile'

class FileReader implements FileReaderType {
  constructor () {}
  read (filePath: string) {
    return readFileSync(filePath, { encoding: 'utf-8' })
  }
}
// 1.构造器调用
const result = new ReadAndProcessFile(new FileReader()).run('test.txt')

// 2.属性调用
const rr = new ReadAndProcessFile1()
rr.filRender = new FileReader()
const result1 = rr.run('test.txt')

// 3.方法调用
const rrr = new ReadAndProcessFile2()
rrr.setFilRender(new FileReader())
const result2 = rrr.run('test.txt')

console.log(result, 'result')
console.log(result1, 'result1')
console.log(result2, 'result2')
