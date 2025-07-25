// Variáveis para armazenar o nome e a XP do herói
let nome = "andre";
let xp = 10000;

// Estrutura de decisão para determinar o nível do herói
let nivel; // Declara a variável 'nivel' que será preenchida

if (xp <= 1000){
    nivel = "Ferro";
    }else if(xp >= 1001 && xp <= 2000){
        nivel = "Bronze";
    }else if(xp >= 2001 && xp <= 5000){
        nivel = "Prata";
    }else if(xp >= 6001 && xp <= 7000){
        nivel = "Ouro";
    }else if(xp >= 7001 && xp <= 8000){
        nivel = "Platina Diamante";
    }else if(xp >= 8001 && xp <= 9000){
        nivel = "Ascendente";
    }else if(xp >= 9001 && xp <= 10000){
        nivel = "Imortal";
    }else { // Se XP for maior ou igual a 10001
     nivel = "Radiante"; 
}
// Apresentando a mensagem final no console
console.log("O Herói de nome " + nome + " está no nível de " + nivel);