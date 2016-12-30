module.exports = {
  tag: function (node) {
    if (!node.attribs || !node.attribs.class) return

    const classes = node.attribs.class.split(' ')

    let duplicateFound = false
    for (let i = 0; i < classes.length; i++) {
      if (classes.indexOf(classes[i]) !== i) {
        duplicateFound = true
        break
      }
    }

    if (!duplicateFound) return

    return {
      message: 'No duplicate classes allowed',
      node
    }
  }
}
