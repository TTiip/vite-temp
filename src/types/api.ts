interface Common {
  code: 0 | 200
  message: string | null | undefined
}

interface UserInfoDataItem {
  id: string
  username: string
  email: string
  sex: number
}

// interface
export type {
  Common,
  UserInfoDataItem,

}
