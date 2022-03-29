// 解决jest导入ESM模块、typescript类型
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript']
}
