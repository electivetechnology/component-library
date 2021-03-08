import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const input = 'src/index.ts'
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  '@material-ui/core',
  '@material-ui/core/styles',
  '@material-ui/lab',
  'react-color',
  'react-phone-input-2/lib/style.css'
]

const plugins = [
  typescript({
    typescript: require('typescript')
  })
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    plugins,
    external
  }
]
