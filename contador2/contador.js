function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let pas = document.getElementById('txtp')
  let res = document.getElementById('res')

  if(ini.value.length == 0 || fim.value.length == 00 || pas.value.length == 0) {
      res.innerHTML = 'Preencha todos os dados!'
  } else {
      res.innerHTML = 'contando: '
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(pas.value)
      if(p <= 0){
          window.alert(`Passo inválido! Consideramos PASSO = 1 `)
          p = 1
      }

      if(i < f) {
          for(let c = i; c <= f; c += p) { //crescente
              res.innerHTML += ` ${c} \u{1F3CE} `
          }
          res.innerHTML += ` \u{1F3C1} `
      } else {
          for(let c = i; c >= f; c -= p) { //decrescente
              res.innerHTML += ` ${c} \u{1F3CE} `
          }
          res.innerHTML += ` \u{1F3C1} ` 
      }

      
  }
}