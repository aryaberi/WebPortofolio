// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './', // Path ke project Next.js
})

// Custom Jest config
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Untuk setup library tambahan
  moduleNameMapper: {
    // Mengatasi error module alias seperti `@/components/`
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
