module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^./script$': '<rootDir>/script.ts',
  },
};
