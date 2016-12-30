module.exports = {
  tag: function (node) {
    if (node.name !== 'main') return
    if (node.attribs.role === 'main') return

    return {
      message: '<main> element should always have role="main" attribute',
      node
    }
  }
}
