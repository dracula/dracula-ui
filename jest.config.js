module.exports = {
  cacheDirectory: './node_modules/.cache/jest',
  transformIgnorePatterns: ['/node_modules/', '^.+\\.css$'],
  moduleNameMapper: {
    '@/(.+)': '<rootdir>/../../src/$1'
  }
}
