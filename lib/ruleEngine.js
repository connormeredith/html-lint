const ruleEngine = module.exports = { }

const path = require('path')
const rules = require('require-all')({
  dirname: path.join(__dirname, '../rules/'),
  filter: /^(.+)\.js$/
})

ruleEngine.registerEventEmitters = function (messages, emitter) {
  Object.keys(rules).forEach((ruleId) => {
    Object.keys(rules[ruleId]).forEach((eventName) => {
      emitter.on(eventName, function () {
        const message = rules[ruleId][eventName].apply(null, [...arguments])
        if (message) {
          message.ruleId = ruleId
          messages.push(message)
        }
      })
    })
  })
}
