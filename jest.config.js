module.exports = {
  displayName: "jest-tsc",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/*.test.(ts|js)"
  ],
  moduleDirectories: ["node_modules"],
  testPathIgnorePatterns: ["node_modules", "dist"],
  testEnvironment: "node",
  collectCoverage: true,
  verbose: true
};
