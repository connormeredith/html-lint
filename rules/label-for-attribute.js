module.exports = {
  tag: function (node) {
    if (node.name !== 'label') return
    if (node.attribs && node.attribs.for) return

    return {
      message: 'A label must have a for attribute',
      node
    }
  }
}
