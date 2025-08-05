import * as fs from 'fs'
import * as path from 'path'
const iconTypePath = path.join(__dirname, '../src/assets/fonts/iconfont.css')
const iconTypes = fs.readFileSync(iconTypePath, 'utf-8').matchAll(/\.icon-(.*?):before/g)

const content = `
export type IconTypeUnite = ${Array.from(iconTypes)
  .map((item) => `'${item[1]}'`)
  .join(' | ')}
declare global {
  type IconType = IconTypeUnite
}
`

fs.writeFileSync(path.join(__dirname, '../src/types/icon-type.d.ts'), content)
