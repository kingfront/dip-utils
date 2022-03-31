import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      format: 'cjs', // 打包格式
      file: 'dist/dip-utils.cjs.js', // 打包后的文件路径名称
      name: 'dutils' // 打包后的默认导出文件名称
    },
    {
      format: 'esm',
      file: 'dist/dip-utils.esm.js',
      name: 'dutils'
    },
    {
      format: 'umd',
      file: 'dist/dip-utils.umd.js',
      name: 'dutils',
      minifyInternalExports: true
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}
