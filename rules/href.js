module.exports = {
  tag: function (node) {
    if (node.name !== 'a') return
    if (node.attribs.href) return

    return {
      rule: 'href',
      message: 'Missing href on <a> tag',
      node
    }
  }
}
