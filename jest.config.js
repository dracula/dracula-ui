module.exports = {
  cacheDirectory: './node_modules/.cache/jest',
  transformIgnorePatterns: ['/node_modules/'],

  transform: {
    '.+\\.(ts|js|tsx|jsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
  },

  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },

  moduleNameMapper: {
    '@/(.+)': '<rootdir>/../../src/$1'
  }
}
