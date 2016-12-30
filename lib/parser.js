const parser = module.exports = { }

const htmlParser = require('htmlparser2')

const PARSER_OPTIONS = {
  withStartIndices: true,
  withEndIndices: true,
  withDomLvl1: true
}

parser.parse = function (text) {
  const tree = htmlParser.parseDOM(text, PARSER_OPTIONS)

  tree.forEach((element) => {
    element = parser._addMetadata(element, text)
  })

  return tree
}

parser._addMetadata = function (element, text) {
  const startIndex = element.startIndex
  const endIndex = (element.next) ? element.next.startIndex : -1
  element.scope = parser._getScope(text, startIndex, endIndex)
  element.lineNumber = parser._getLineNumber(text, startIndex)
  element.endIndex = endIndex

  if (element.children && element.children.length) {
    element.children = element.children.map((childElement) => {
      return parser._addMetadata(childElement, text)
    })
  }

  return element
}

parser._getScope = function (text, startIndex, endIndex) {
  return text.slice(startIndex, endIndex)
}

parser._getLineNumber = function (text, startIndex) {
  let fragment = text.slice(0, startIndex)
  return fragment.split('\n').length
}
