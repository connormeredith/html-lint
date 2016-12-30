module.exports = {
  tag: function (node) {
    if (node.name !== 'img') return
    if (node.attribs.src) return

    return {
      message: 'Missing src attribute on <img> tag',
      node
    }
  }
}
