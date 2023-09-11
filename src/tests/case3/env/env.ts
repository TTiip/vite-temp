// process.env
// vite webpack --> import.meta.env

function doubleUserAge () {
  return Number(process.env.USER_AGE) * 2
}

export {
  doubleUserAge,
}
