// 间接输入的参数（ajax 异步获取的数据等）
function fetchUserAge (): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(20)
    }, 100)
  })
}

export {
  fetchUserAge,
}
