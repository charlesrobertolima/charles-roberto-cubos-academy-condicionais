//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === "credito") {
  const precoFinal = (valorDoProduto - (valorDoProduto * 0.05)) / 100;
  console.log(`O valor a ser pago no crédito é de R$${precoFinal.toFixed(2)}!`);
} else if(tipoDePagamento === "cheque"){
  const precoFinal = (valorDoProduto - (valorDoProduto * 0.03)) / 100;
  console.log(`O Valor a ser pago no cheque é de R$${precoFinal.toFixed(2)}!`);
} else if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro"){
  const precoFinal = (valorDoProduto - (valorDoProduto*0.1))/100;
  console.log(`O Valor a ser pago no débito é de R$${precoFinal.toFixed(2)}!`);
} 
