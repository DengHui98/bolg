import incons from '../assets/fonts/iconfont.css?raw'
const iconsMatches = incons.matchAll(/\.icon-([a-zA-Z0-9-_]+):before/g)
const iconTypes = [...Array.from(iconsMatches).map((item) => item[1])] as const

export default iconTypes
