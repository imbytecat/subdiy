const fs = require('fs');
const path = require('path')

const dotenv = require("dotenv")
dotenv.config()

const readFile = path.resolve(__dirname, './public/config/external.example.toml');
const wrideFile = path.resolve(__dirname, './public/config/external.toml')

fs.readFile(readFile, (err, buffer) => {
  if (err) console.error(err)

  let external = buffer.toString()
  external = external.replace(/SUBDIY_URL/g, process.env.VITE_SUBDIY_URL)

  fs.writeFile(wrideFile, external, (err) => {
    if (err) console.error(err);
  })
})
