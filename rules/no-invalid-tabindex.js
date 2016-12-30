// should be a warning
module.exports = {
  tag: function (node) {
    if (!node.attribs) return
    if (!node.attribs.tabindex) return

    const tabIndex = node.attribs.tabindex
    if (['-1', '0'].includes(tabIndex)) return

    return {
      message: 'You should only use a tabindex of -1 or 0',
      node
    }
  }
}
