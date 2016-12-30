const linter = module.exports = { }

const EventEmitter = require('events').EventEmitter
const ruleEngine = require('./ruleEngine')
const traverser = require('./traverser')

linter.lint = function (html) {
  let emitter = new EventEmitter()
  emitter.setMaxListeners(0)

  const messages = []

  ruleEngine.registerEventEmitters(messages, emitter)
  traverser.traverseDom(html, emitter)

  return messages
}
