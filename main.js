import { encode } from './encode.js'
import { deCode } from './decode.js'

let input = document.getElementById('plainTextArea')
let output = document.getElementById('CodeText')
let deCodeBtn = document.getElementById('deCode')
let encodeBtn = document.getElementById('enCode')

encodeBtn.addEventListener('click', (event) => {
  encode()
})

deCodeBtn.addEventListener('click', () => {
  decode()
})

function decode() {
  const codedText = input.value
  const deCodedText = deCode(codedText)
  output.textContent = deCodedText
}

function encode() {
  const plainText = input.value
  const codedText = encode(plainText)
  output.textContent = codedText
}
