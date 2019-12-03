module.exports = {
  verbose: true,
  testRegex: "((\\.|/*.)(spec))\\.js?$",
  transformIgnorePatterns: [
    '/node_modules/(?!@babel\/runtime)'
  ],
  setupFilesAfterEnv: [
    "<rootDir>/enzyme.config.js"
  ]
  
}