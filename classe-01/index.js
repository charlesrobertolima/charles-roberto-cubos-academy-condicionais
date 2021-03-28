const jogada1 = "pedra"
const jogada2 = "tesoura"
const jogada3 = "papel";

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura"){
  console.log(`O resultado desta jogada foi ${jogada1} ganhou de ${jogada2}!`);
} else if (jogada1 === "pedra" && jogada3 === "papel") {
  console.log(`O resultado desta jogada foi ${jogada3} ganhou de ${jogada1}!`);
} else if (jogada3 === "papel" && jogada2 === "pedra") {
  console.log(`O resultado desta jogada foi ${jogada3} ganhou de ${jogada1}!`);
} else if (jogada3 === "papel" && jogada2 === "tesoura") {
  console.log(`O resultado desta jogada foi ${jogada2} ganhou de ${jogada3}!`);
} else if (jogada2 === "tesoura" && jogada3 === "papel") {
  console.log(`O resultado desta jogada foi ${jogada2} ganhou de ${jogada3}!`);
} else if (jogada2 === "tesoura" && jogada1 === "pedra") {
  console.log(`O resultado desta jogada foi ${jogada1} ganhou de ${jogada2}!`)
} else { (jogada1 === jogada2) 
  console.log(`O resultado desta jogada foi empate!`);
} 
