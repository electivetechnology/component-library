import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs';

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.ts";
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  typescript({
    declaration: true,
    declarationDir: 'dist',
    rootDir: 'src/'
  }),
  nodeResolve(),
  peerExternal(),
  commonjs()
]

export default [
  {
    input,
    output: {
      format: "esm",
      sourcemap: true,
      dir: 'dist',
    },
    treeshake: false,
    plugins,
    external,
  },
  {
    input,
    output: {
      format: "cjs",
      sourcemap: true,
      dir: 'dist',
    },
    treeshake: false,
    plugins,
    external,
  },
];
