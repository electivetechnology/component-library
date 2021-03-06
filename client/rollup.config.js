import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const input = 'src/index.ts'

const plugins = [
  typescript({
    typescript: require('typescript')
  }),
  peerDepsExternal(),
  resolve()
]
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
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
