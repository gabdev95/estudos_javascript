function verificaPalindromo() {
  var txtpol = window.document.getElementById('txtpol')
  var msg = window.document.getElementById('msg')
  var res = String(txtpol.value)
  

  if (res === res.split('').reverse().join('')) {
    msg.innerHTML = `A palavra "${res}" é um palíndromo.`;
  } else {
    msg.innerHTML = `A palavra "${res}" não é um palíndromo.`;
  }
}