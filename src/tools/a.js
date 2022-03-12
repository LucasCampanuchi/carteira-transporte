import fs from 'fs'

export function base64encode (file) {
  return 'data:image/gif;base64,' + fs.readFileSync(file, 'base64')
}
