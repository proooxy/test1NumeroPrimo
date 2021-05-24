let num = prompt("Digite um numero e saiba se é primo");
let divisoes = 0;

for (let i = 1; i <= num; i++){

    if(num % i == 0){
        divisoes++
    }
}
if(divisoes == 2){
    console.log(`${num} É um numero primo`);
}else{
    console.log(`${num} Não é um numero primo`);
}
