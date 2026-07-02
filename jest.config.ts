import type { Config } from 'jest';

const config: Config = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',

    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    }
};

export default config;