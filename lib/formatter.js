const formatter = module.exports = { }

const chalk = require('chalk')
const textTable = require('text-table')

formatter.format = function (results) {
  let output = '\n'

  results.forEach((result) => {
    output += `${chalk.underline(result.fileName)}\n`
    const table = textTable(
      result.results.map(message => {
        return [
          '',
          chalk.dim(`${message.node.lineNumber}:0`),
          chalk.red('error'),
          message.message,
          chalk.dim(message.rule)
        ]
      }), {
        align: ['', 'r', 'l']
      })
    output += `${table}\n\n`
  })

  return output
}
