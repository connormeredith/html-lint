module.exports = {
  tag: function (node) {
    if (node.prev !== null || node.parent !== null) return

    if (node.type === 'directive') return

    return {
      rule: 'doctype-first',
      message: '<doctype> tag should be first',
      node
    }
  },
  text: function (node) {
    if (node.prev !== null || node.parent !== null) return

    return {
      message: '<doctype> tag should be first',
      node
    }
  }
}
