const domutils = require('domutils')

module.exports = {
  tag: function (node, dom) {
    if (!node.attribs || !node.attribs.id) return

    const id = node.attribs.id

    const matching = domutils.find(elem => (elem.attribs && elem.attribs.id === id), dom, true)

    if (matching.length === 1) return

    return {
      rule: 'no-duplicate-ids',
      message: 'id should not be duplicated across elements',
      node
    }
  }
}
