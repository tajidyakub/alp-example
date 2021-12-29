const fs = require('fs')
const { basename } = require('path')
const path = require('path')
const { default: snarkdown } = require('snarkdown')
const snarkdwon = require('snarkdown')

const writeToFile = (folderPath,filePath,content) => {
    let fileName = path.parse(basename(filePath)).name
    let htmlFile = folderPath+'/html/'+fileName+'.html'
    console.log(htmlFile)
    fs.writeFile(htmlFile, content, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`File ${htmlFile} written.`)
        //file written successfully
      })
}

const readFile = (filePath, cb) => {
    return fs.readFile(filePath, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        cb(data, snarkdwon)
        return data
      })      
}


const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
  }

const folderPath = './src/notes'
  
const files = fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})
.filter(isFile)

if (files.length) {
    files.forEach(f => {
        readFile(f, (d,sd) => {
            let html = sd(d)
            writeToFile(folderPath,f,html)
        })
        
    })
}

//readFile('responsive-navbar')







