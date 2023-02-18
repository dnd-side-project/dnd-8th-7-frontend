import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { Colors } from './type'

const config = resolveConfig(tailwindConfig)
const colors = config?.theme?.colors as Colors

export { colors }
