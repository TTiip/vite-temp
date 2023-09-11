// process.env
// vite webpack --> import.meta.env

function doubleUserAge () {
  return Number(import.meta.env.USER_AGE) * 2
}

export {
  doubleUserAge,
}
