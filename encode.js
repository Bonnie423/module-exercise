export function encode(plainText) {
  let codeText = ''
  for (let i = 0; i < plainText.length; i++) {
    let cc = plainText.charCodeAt(i) + 9
    codeText += String.fromCharCode(cc)
  }
  return codeText
}
