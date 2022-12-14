/* --- DESAFIO 3 --- */

function IMC (peso, altura) {
  peso = prompt('Digite seu peso: ')
  altura = prompt('Digite sua altura: ')
  
  imc = peso / Math.pow(altura, 2)

  if (imc < 18.5) {
  console.log(`Abaixo do peso. IMC: ${imc.toFixed(2)}`)
} else if (imc >= 18.5 && imc <= 25) {
  console.log(`Peso normal. IMC: ${imc.toFixed(2)}`)
} else if (imc > 25 && imc <= 30) {
  console.log(`Acima do peso. IMC: ${imc.toFixed(2)}`)
} else if (imc > 30 && imc <= 40) {
  console.log(`Obeso. IMC: ${imc.toFixed(2)}`)
} else {
  console.log(`Obesidade grave. IMC: ${imc.toFixed(2)}`)
}
}

IMC()