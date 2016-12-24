const domutils = require('domutils')

module.exports = {
  tag: function (node, dom) {
    if (node.name !== 'label') return

    const id = node.attribs.for
    if (!id) return undefined

    const matching = domutils.find(elem => (elem.attribs && elem.attribs.id === id), dom, true)

    if (matching.length) return

    return {
      rule: 'label-matching-for-id',
      message: '<label> "for" attribute should match the "id" of an input',
      node
    }
  }
}
