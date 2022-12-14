/* --- DESAFIO 1 --- */

precoE = 3.50
precoG = 4.80
const kmPorLitrosE = 10
const kmPorLitrosG = 13
distanciaEmKm = 100
carro = 'Gasolina'

if (carro === 'Etanol') {
  gastoViagem = (distanciaEmKm / kmPorLitrosE) * precoE
  console.log('R$ ', gastoViagem.toFixed(2))
} else if (carro === 'Gasolina') {
  gastoViagem = (distanciaEmKm / kmPorLitrosG) * precoG
  console.log('R$ ', gastoViagem.toFixed(2))
} else {
  console.log('Inválido.')
}
