// 4 Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// let valor=-6

// if(valor>0){
//     console.log("positivo");
// }
// else if(valor<0){
//     console.log("negativo");
// }
// else{
//     console.log("zero");
// }

// 5 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//. Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//. Um ângulo será considerado inválido se não tiver um valor positivo.


// let angA = 90;
// let angB = 40;
// let angC = 50;
// let somaTotal = angA + angB + angC;
// let angPositivo = angA > 0 && angB > 0 && angC > 0;

// if(angPositivo) {
//     if(somaTotal===180) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }
// else {
//     console.log('Ângulo Inválido');
// }


// 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


let xadrezTorre = "rei";

switch (xadrezTorre.toLowerCase()) {
  case "Rei":
    console.log("Rei, movimenta uma casa por vez em qualquer sentido");
    break;

  case "Pião":
    console.log("Pião, movimenta em diagonal e reto sempre pra frente");
    break;

  case "Bispo":
    console.log("Bispo, movimenta em diagonal");
    break;

  case "Cavalo":
    console.log("Cavalo, movimenta em diagonal e vertical desenhando um L no tabuleiro");
    break;

  case "Torre":
    console.log("Torre, movimenta em vertical");
    break;

  case "Rainha":
    console.log("Rainha, movimenta em diagonal e vertical");

  default:
    console.log("Peça inválida"); {

    } 
}
  