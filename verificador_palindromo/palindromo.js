var txtpol = window.document.getElementById('txtpol')
var msg = window.document.getElementById('msg')

function verificaPalindromo() {
  if(txtpol === string.split("").reverse().join("")) {
  msg.innerHTML = `A palavra ${txtpol} é um palíndromo`;
  } else {
    `A palavra ${txtpol} não é um palíndromo`;
  }
}