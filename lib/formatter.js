const formatter = module.exports = { }

formatter.format = function (messages) {
  messages.forEach((message) => {
    const fileName = Object.keys(message)[0]
    console.log(fileName)
    message[fileName].forEach((messageString) => {
      console.log(`  ${messageString}`)
    })
  })
}
