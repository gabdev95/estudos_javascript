function calculadora() {
  const operacao = prompt('Escolha uma opção: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)');

  if (!operacao || operacao >= 7) {
    alert('Operação Inválida!');
    calculadora();
  } else {
    let n1 = Number(prompt('Insira o primeiro valor: '));
  let n2 = Number(prompt('Insira o segundo valor: '));
  let resultado;

  if (!n1 || !n2) {
    alert('Parâmetros inválidos!');
    calculadora();
  } else {
    function soma() {
      resultado = n1 + n2;
      alert(`O resultado da soma entre ${n1} e ${n2} é igual a ${resultado}.`);
      novaoperacao();
    }
  
    function subtracao() {
      resultado = n1 - n2;
      alert(`O resultado da subtração entre ${n1} e ${n2} é igual a ${resultado}.`);
      novaoperacao();
    }
  
    function multiplicacao() {
      resultado = n1 * n2;
      alert(`O resultado da multiplicação entre ${n1} e ${n2} é igual a ${resultado}.`);
      novaoperacao();
    }
  
    function divisaoReal() {
      resultado = n1 / n2;
      alert(`O resultado da divisão real entre ${n1} e ${n2} é igual a ${resultado}.`);
      novaoperacao();
    }
  
    function divisaoInteira() {
      resultado = n1 % n2;
      alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}.`);
      novaoperacao();
    }
  
    function potenciacao() {
      resultado = n1 ** n2;
      alert(`${n1} elevado a ${n2} é igual a ${resultado}.`);
      novaoperacao();
    }
  
    function novaoperacao() {
      let opcao = prompt('Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não');
  
      if (opcao == 1) {
        calculadora();
      } else if (opcao == 2) {
        alert('Até mais!')
      } else {
        alert('Digite uma opção válida!')
        novaoperacao();
      }
    }
  }

  if (operacao == 1) {
    soma();
  } else if (operacao == 2) {
    subtracao();
  } else if (operacao == 3) {
    multiplicacao();
  } else if (operacao == 4) {
    divisaoReal();
  } else if (operacao == 5) {
    divisaoInteira();
  } else if (operacao == 6) {
    potenciacao();
  } 
  }

}

calculadora();