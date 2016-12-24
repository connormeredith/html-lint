const ruleEngine = module.exports = { }

ruleEngine.registerEventEmitters = function (rules, messages, emitter) {
  Object.keys(rules).forEach((filename) => {
    Object.keys(rules[filename]).forEach((type) => {
      emitter.on(type, (node, dom) => {
        const result = rules[filename][type].call(null, node, dom)
        if (!result) return

        messages.push(result)
      })
    })
  })
}
