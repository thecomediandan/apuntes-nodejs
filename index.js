/**
 * Primero preparamos el package.json:
 * consideramos los comandos en el objeto script con las siguientes linea
 *  "start": "node index.js",
 *  "dev": "node index.js"
 * Se activan con 'npm run dev' o start, para ejecutarlos dependiendo del entorno.
 * Con dev utilizaremos las dependencias de desarrollo con start no pero es el oficial
 * 
 * Con 'type': 'modules', en el objeto principal habilitamos las importaciones/exportaciones con ECS6
 * 
 * Podremos instalar dependencias de desarrollo de esta manera 'npm i nodemon --save-dev'
 * dependencias globales 'npm i dotenv', 'npm i env-var'
 */

//Importacion antigua
// const {name, lastname, contact} = require('./example-exports.js')
// const {email, tel} = contact
// console.log(name('Daniel'))
// console.log(lastname('Danish'))
// console.log(email)
// console.log(name(tel))

//Importacion actual
import {name, lastname, contact} from './example-exports.js'
const {email, tel} = contact

console.log(name('Daniel'))
console.log(lastname('Danish'))
console.log(email)
console.log(name(tel))

// File System
import fs from 'node:fs'
let date = new Date()
const fileRead = fs.readFileSync('./file-read.txt', 'utf-8')
fs.writeFileSync('./file-write.txt', fileRead + `\n[Modificado: ${date}]`)
console.log(fileRead)

// Variables de entorno
/**
 * Para crear variables de entorno locales crear un archivo .env
 * el archivo .env debe ser utilizado solo para desarrollo, para produccion se debe crear un archivo llamado
 * .env.template indicando una idea de que tipo de valores se introducen en las variables de entorno esto
 * debido a que es información sensible y no deberia de subirse, incluso se recomienda ponerlo en el archivo
 * .gitignore para no subirlos a los repositorios remotos.
 * npm i dotenv
 * npm i env-var
 * 
 * En Windows:
 * $env:MIVARIABLE = "mi_valor"
 * se ve con: Get-ChildItem Env: o Get-ChildItem Env: | Format-Table.
 * 
 * En Linux:
 * export MIVARIABLE="mi_valor"
 * se ve con: echo $MIVARIABLE.
 */
import config1 from 'dotenv' // Hace que el archivo .env se introduzca al process, solamente para desarrollo
import config2 from 'env-var' // Puede interactuar con el process, uso para produccion para acceder a las variables de entorno
config1.config()
console.log(process.env.PORT) // Si estuvieras en un servidor tomaria las variables de entorno del sistema
console.log(config2.get('USER').required().asString())
console.log(config2.get('PSW').required().asString())
console.log(config2.get('PORT').required().asInt())
