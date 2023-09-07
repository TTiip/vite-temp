import { fetchUserAge } from './user'

async function doubleUserAge (): Promise<number> {
  // 此处用到的异步的数据进行处理
  // 当直接获取的 fetchUserAge 修改的时候 测试case 也要随之修改
  // 这是很脆弱的，可以使用 vi.mock 去模拟数据
  return (await fetchUserAge()) as number * 2
}

console.log(doubleUserAge, 'doubleUserAge')

export {
  doubleUserAge,
}
