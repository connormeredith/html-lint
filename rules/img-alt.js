module.exports = {
  tag: function (node) {
    if (node.name !== 'img') return
    if (node.attribs.alt) return

    return {
      message: 'Missing alt attribute on <img> tag',
      node
    }
  }
}
