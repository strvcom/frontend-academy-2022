import nextJest from 'next/jest'
import { join } from 'path'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

//jestjs.io/docs/configuration
const customJestConfig = {
  // Add more setup options before each test is run
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'jest-environment-jsdom',
  modulePaths: ['<rootDir>/src'], // https://jestjs.io/docs/configuration#modulepaths-arraystring
  // https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: join('<rootDir>', compilerOptions.baseUrl),
  }),
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
