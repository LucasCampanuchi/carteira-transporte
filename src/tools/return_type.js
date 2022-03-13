export const returnType = (string) => {
  return string.split('data:image/')[1].split(';')[0]
}
