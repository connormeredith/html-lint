const parser = module.exports = { }

const htmlParser = require('htmlparser2')

const PARSER_OPTIONS = {
  withStartIndices: true,
  withEndIndices: true,
  withDomLvl1: true
}

parser.parse = function (text) {
  return htmlParser.parseDOM(text, PARSER_OPTIONS)
}
