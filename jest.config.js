module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    testMatch: [
        '<rootDir>/src/*.test.js',
        '<rootDir>/src/**/*.test.js',
        '<rootDir>/src/**/*.test.jsx',
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};
