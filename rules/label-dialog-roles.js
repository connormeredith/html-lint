// should be a warning
module.exports = {
  tag: function (node) {
    if (!node.attribs) return
    if (!node.attribs.role) return
    if (node.attribs.role !== 'dialog') return
    if (node.attribs['aria-labelledby']) return

    return {
      message: 'aria-labelledby attribute should by used when role="dialog"',
      node
    }
  }
}
