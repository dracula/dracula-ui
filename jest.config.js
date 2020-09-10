module.exports = {
  cacheDirectory: './node_modules/.cache/jest',
  moduleNameMapper: {
    '@/(.+)': '<rootdir>/../../src/$1'
  }
}
