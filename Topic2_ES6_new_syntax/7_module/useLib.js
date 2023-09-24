import {message} from './lib.js'

//dinh nghia mot element de nhung vao DOM(document)
const tieude1 = document.createElement("h1")
tieude1.className = "tieude1"
tieude1.innerText = message
document.body.appendChild(tieude1)