const linter = module.exports = { }

const EventEmitter = require('events').EventEmitter
const path = require('path')
const ruleEngine = require('./ruleEngine')
const rules = require('require-all')({
  dirname: path.join(__dirname, '../rules/'),
  filter: /^(.+)\.js$/
})
const traverser = require('./traverser')

linter.lint = function (html) {
  let emitter = new EventEmitter()
  const messages = []

  ruleEngine.registerEventEmitters(rules, messages, emitter)
  traverser.traverseDom(html, emitter)

  emitter = null

  return messages
}
