// 1.强依赖版本
// import { readFileSync } from 'fs'

// class ReadAndProcessFile {
//   constructor () {}
//   run (filePath: string) {
//     const content = readFileSync(filePath, { encoding: 'utf-8' })
//     return `${content} --> unit test`
//   }
// }

// 2.通过传入的方式解决强依赖的问题
interface FileReaderType {
	read(filePath: string): string
}
// 1) 构造器
class ReadAndProcessFile {
  private _fileReader: any
  constructor (fileReader: FileReaderType) {
    this._fileReader = fileReader
  }

  run (filePath: string) {
    const content = this._fileReader.read(filePath)
    return `${content} --> unit test`
  }
}

// 2) 属性
class ReadAndProcessFile1 {
  private _fileReader: any
  constructor () {}

  run (filePath: string) {
    const content = this._fileReader.read(filePath)
    return `${content} --> unit test`
  }

  get filRender () {
    return this._fileReader
  }

  set filRender (fileReader: FileReaderType) {
    this._fileReader = fileReader
  }
}

// 3) 方法
class ReadAndProcessFile2 {
  private _fileReader: any
  constructor () {}

  run (filePath: string) {
    const content = this._fileReader.read(filePath)
    return `${content} --> unit test`
  }

  setFilRender (fileReader: FileReaderType) {
    this._fileReader = fileReader
  }
}

export {
  ReadAndProcessFile,
  ReadAndProcessFile1,
  ReadAndProcessFile2,
  type FileReaderType,
}
