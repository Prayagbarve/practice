// node simple async program
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, (name) => {
    console.log(`name---> ${name}!`)
    readline.close()
  })

console.log("check");