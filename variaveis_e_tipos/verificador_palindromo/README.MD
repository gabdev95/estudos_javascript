# Verificador de Palíndromo

#### 📌 Visualização do projeto:

<p align="left">
  <img height="300em" src="/variaveis_e_tipos/verificador_palindromo/img/palindromo.gif">
</p>

#### 📌 Código original do projeto:

function verificaPalindromo(string) {
  if (!string) return;

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ana"));
