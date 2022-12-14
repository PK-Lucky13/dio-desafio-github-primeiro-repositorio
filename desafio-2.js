/* --- DESAFIO 2 --- */

let notas = [5, 3, 7]
let soma = 0

function mediaFinal() {
  for (i = 0; i < notas.length; i++) {
    media = (soma += notas[i]) / notas.length
  }
  if (media < 5) {
  console.log(`Reprovado. Média: ${media.toFixed(2)}`)
} else if (media >= 7) {
  console.log(`Aprovado. Média: ${media.toFixed(2)}`)
} else {
    console.log(`Recuperação. Média: ${media.toFixed(2)}`)
  }
}

mediaFinal(notas)