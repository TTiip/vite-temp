// 1.强依赖版本
// import { readFileSync } from 'fs'

// function readAndProcessFile (filePath: string): string {
//   const content: string = readFileSync(filePath, { encoding: 'utf-8' })
//   return `${content} --> test unit`
// }

// 2.通过传入的方式解决强依赖的问题
interface FileReaderType {
	read(filePath: string): string
}
function readAndProcessFile (filePath: string, fileReader: FileReaderType): string {
  const content: string = fileReader.read(filePath)
  // ......
  // 实际场景下可能这里的逻辑会更复杂
  return `${content} --> test unit`
}

export {
  readAndProcessFile,
  type FileReaderType,
}
