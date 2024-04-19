import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createjestConfig=nextJest({
  dir:"./",
})

const config: Config ={
  coverageProvider: 'v8',
  testEnvironment: 'jsdom'
}
export default createjestConfig(config)