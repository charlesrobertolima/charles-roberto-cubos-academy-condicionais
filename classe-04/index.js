const ladoA = 3;
const ladoB = 3;

// o código da solução

if (ladoA === ladoB) {
  switch (ladoA) {
    case 0:
      console.log("O nome da bucha é Branco!!");
      break;
    case 1:
      console.log("O nome da bucha é ÁS!");
      break;
    case 2:
      console.log("O nome da bucha é Duque!");
      break;
    case 3:
      console.log("O nome da bucha é Terno!!!");
      break;
    case 4:
      console.log("O nome da bucha é Quadra!!!!");
      break;
    case 5:
      console.log("O nome da bucha é Quina!!");
      break;
    case 6:
      console.log("O nome da bucha é Sena!!!");
      break;
    default:
      break;
  }
} else {
  console.log("Não!!!");
}