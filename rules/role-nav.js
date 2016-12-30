module.exports = {
  tag: function (node) {
    if (node.name !== 'nav') return
    if (node.attribs.role === 'navigation') return

    return {
      message: '<nav> element should always have role="navigation" attribute',
      node
    }
  }
}
