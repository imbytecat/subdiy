import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from 'dotenv'
dotenv.config()

const readFile = path.resolve(__dirname, './public/config/external.example.toml')
const wrideFile = path.resolve(__dirname, './public/config/external.toml')

fs.readFile(readFile, (err, buffer) => {
  if (err) console.error(err)

  let external = buffer.toString()
  external = external.replace(/SUBDIY_URL/g, process.env.VITE_SUBDIY_URL)

  fs.writeFile(wrideFile, external, (err) => {
    if (err) console.error(err);
  })
})
