const alturaEmCm = 1.85;

//seu código aqui
switch (true) {
  case alturaEmCm < 1.80:
    console.log("REPROVADO!");
    break;
  case alturaEmCm <= 1.85:
    console.log("POSIÇÃO LÍBERO!");
    break;
  case alturaEmCm <= 1.95:
    console.log("POSIÇÃO PONTEIRO!");
    break;
  case alturaEmCm <= 2.05:
    console.log(" POSIÇÃO OPOSTO!");
    break;
  case alturaEmCm > 2.05:
    console.log("POSIÇÃO CENTRAL!");
    break;
  default:
    break;
}