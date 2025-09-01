export default {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.js'
  ],
  collectCoverageFrom: [
    'server/**/*.js',
    'server/**/*.ts',
    'client/src/**/*.js',
    'client/src/**/*.ts',
    '!**/node_modules/**',
    '!**/coverage/**'
  ]
};