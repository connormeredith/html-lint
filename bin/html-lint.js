const async = require('async')
const formatter = require('../lib/formatter')
const fs = require('fs')
const parser = require('../lib/parser')
const linter = require('../lib/linter')

if (!process.argv[2]) process.exit(1)
const fileNames = process.argv.slice(2, process.argv.length)

async.map(fileNames, (fileName, cb) => {
  fs.readFile(fileName, 'UTF-8', (ignoredErr, file) => {
    const html = parser.parse(file)
    const messages = linter.lint(html, fileName, file)

    return cb(null, messages)
  })
}, (ignoredErr, messages) => {
  formatter.format(messages)
})
