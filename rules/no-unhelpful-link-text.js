const unhelpfulWords = [
  'about',
  'click',
  'go',
  'here',
  'learn',
  'link',
  'more',
  'page',
  'tap',
  'this'
]

// this should be a warning
module.exports = {
  tag: function (node) {
    if (node.name !== 'a') return
    if (!node.children || !node.children.length) return
    if (node.children[0].type !== 'text') return

    const text = node.children[0].data
    if (!unhelpfulWords.some(word => text.includes(word))) return

    return {
      message: 'Link text may be unhelpful',
      node
    }
  }
}
