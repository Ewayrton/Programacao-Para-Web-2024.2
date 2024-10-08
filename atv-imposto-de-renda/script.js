function porcentAliq(salar, imposto,dedSimp){
let porcento = 0;
dedSimp = 564.8;

porcento = imposto * 100 / (salar + dedSimp);
porcento = Math.floor(porcento * 100) / 100;

document.getElementById('porcento').textContent = porcento.toFixed(2);
document.getElementById('simbolo').textContent = '%';

}


function calcImp(){
 let salario = parseFloat(document.getElementById('salario').value);
 let deducaoSimples = 564.8;
 salario += -  deducaoSimples;

 let ir = 0;
 let faixa1 = 2259.2;
 let faixa2 = 2826.65;
 let faixa3 = 3751.05;
 let faixa4 = 4664.68;

 if (salario  <= faixa1){
    salario = 0;

 }else if (salario <= faixa2){
   ir = (salario - faixa1) * 0.075;
    

 }else if (salario <= faixa3){
   ir = ((faixa2 - faixa1) * 0.075) + ((salario - faixa2) * 0.15);
    

 }else if (salario <= faixa4){
   ir = ((faixa2 - faixa1) * 0.075) + ((faixa3 - faixa2) * 0.15) + ((salario - faixa3) * 0.225);
    


 }else {
   ir = ((faixa2 - faixa1) * 0.075) + ((faixa3 - faixa2) * 0.15) + ((faixa4 - faixa3) * 0.225) + ((salario - faixa4) * 0.275);
    

 }

 ir = Math.floor(ir*100) / 100;


document.getElementById('resultado').textContent = ir.toFixed(2);
porcentAliq(salario,ir,deducaoSimples);
}