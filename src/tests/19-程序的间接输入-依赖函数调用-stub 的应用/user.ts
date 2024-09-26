const user = {
  age: 1,
}

function userAge () {
  // api
  // return user.age
  return 4
}

// api.js
function fetchUserAge (): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(18)
    }, 2000)
  })
}

export {
  user,
  userAge,
  fetchUserAge,
}
