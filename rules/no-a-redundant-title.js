// this should be a warning
module.exports = {
  tag: function (node) {
    if (node.name !== 'a') return
    if (!node.attribs.title) return
    if (!node.children && !node.children.length) return
    if (node.children[0].type !== 'text') return

    const title = node.attribs.title
    const text = node.children[0].data

    if (text.trim() !== title.trim()) return

    return {
      message: 'Redundant title on <a> tag',
      node
    }
  }
}
