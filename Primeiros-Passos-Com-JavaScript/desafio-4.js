/* --- DESAFIO 4 --- */
/* --- TERMINAR --- */

function pagamento (preco, qntd, pgto) {
  preco = Number(prompt('Digite o preco do produto: '));
//  qntd = Number(prompt('Digite a qntd do produto: '));
//  let encerra;
  console.log('\nForma de pagamento:\n \n1. À vista (Dinheiro/PIX) \n2. Débito \n3. Parcelado\n');
  pgto = prompt('Selecione opcao: ');

const dinheiroPix = preco * 15/100; //15% de Desconto
const debito = preco * 10/100; //10% de Desconto
const parcelaMaiorQ2x = preco * 0.1; //10% de Juros
  
  switch (pgto) {
    case '1':
      desconto = preco - dinheiroPix;
      console.log(`\n\n--- OPÇÃO: À VISTA (DINHEIRO / PIX) ---\n\nValor da compra: R$ ${desconto.toFixed(2)}`);
      break;
    case '2':
      desconto = preco - debito;
      console.log(`\n\n--- OPÇÃO: DÉBITO ---\n\nValor da compra: R$ ${desconto.toFixed(2)}`);
      break;
    case '3':
      console.log('\n\n--- OPÇÃO: PARCELADO ---')
      parcela = Number(prompt('\n\nDigite o número de parcelas: '));

      if (parcela === 2) {
          valorParcela = preco / parcela;
          console.log(`\n\nValor da compra: R$ ${preco.toFixed(2)}\nNº de parcelas: ${parcela}\nValor de parcela: R$ ${valorParcela.toFixed(2)}`);
          
      } else if (parcela >= 3 && parcela <= 12) {
        juros = preco + parcelaMaiorQ2x;
        valorParcela = juros / parcela;
        console.log(`\n\nValor da compra: R$ ${juros.toFixed(2)}\nNº de parcelas: ${parcela}\nValor de parcela: R$ ${valorParcela.toFixed(2)}`);
      } else {
        console.log('\n\nOPÇÃO INVÁLIDA.\n');
      }
      
  }
}

pagamento();