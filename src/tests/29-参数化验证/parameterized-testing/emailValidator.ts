export function emailValidator (email: string): boolean {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-z]{2,7}$/i
  return regex.test(email)
}
