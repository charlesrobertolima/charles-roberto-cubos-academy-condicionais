const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 285970; //emCentavos

//seu código aqui

if (aposentada === true || portadoraDeDoenca === true) {
    console.log("ISENTA!!!")
}  else if (totalDeRendimentos <= 2855970) {
  console.log("VAZA LEÃO! JA TA DIFICIL SEM VOCE!!");
} else {
    (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos >= 2855970)
  console.log("PEGA LEAO!!!");
}