export function deCode(codedText) {
  let deCodedText = ''
  for (let i = 0; i < codedText.length; i++) {
    let dc = codedText.charCodeAt(i) - 9
    deCodedText += String.fromCharCode(dc)
  }
  return deCodedText
}
