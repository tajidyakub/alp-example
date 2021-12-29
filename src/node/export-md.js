const fs = require('fs')
const snarkdwon = require('snarkdown')

const writeToFile = (content, title) => {
    fs.writeFile('/Users/joe/test.txt', content, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
}
 
try {
  const data = fs.readFileSync('./src/notes/responsive-navbar.md', 'utf8')
  //console.log(data)
  const html = snarkdwon(data)
  
} catch (err) {
  console.error(err)
}






