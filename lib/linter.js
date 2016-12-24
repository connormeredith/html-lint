const linter = module.exports = { }

const EventEmitter = require('events').EventEmitter
const path = require('path')
const ruleEngine = require('./ruleEngine')
const rules = require('require-all')({
  dirname: path.join(__dirname, '../rules/'),
  filter: /^(.+)\.js$/
})
const traverser = require('./traverser')

linter.getLineNumber = function (text, index) {
  let fragment = text.slice(0, index)
  return fragment.split('\n').length
}

linter.lint = function (html, fileName, text) {
  const emitter = new EventEmitter()
  const messages = []

  ruleEngine.registerEventEmitters(rules, messages, emitter)
  traverser.traverseDom(html, emitter)

  const messageStrings = messages.map((message) => {
    // const lineNumber = 1
    const lineNumber = linter.getLineNumber(text, message.node.startIndex)
    return `L:${lineNumber} - ${message.message} - ${message.rule}`
  })

  const response = { }
  response[fileName] = messageStrings
  return response
}
