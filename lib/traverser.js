const traverser = module.exports = { }

traverser.traverseDom = function traverse (dom, emitter) {
  dom.forEach(node => traverser.walk(node, dom, emitter))
}

traverser.walk = function walk (node, dom, emitter) {
  emitter.emit(node.type, node, dom)

  if (!node.children || !node.children.length) return

  node.children.forEach(childNode => traverser.walk(childNode, dom, emitter))
}
