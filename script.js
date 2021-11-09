const box=document.querySelector('.box');
const text=document.querySelector('.text');
let arr=[];
let i = 0;
let counter = 0 ;
let numeriIndovinati=[];

for (let i=0;i<5;i++){
  let x = Math.ceil(Math.random()*100);
  if(arr.includes(x)===false){
    console.log(arr.includes(x));
    arr.push(x)
  }else{
    i--
  }
}

box.innerHTML= arr;

setInterval(function(){ 
  console.log(i);
  i++;
  if(i==29){ box.innerHTML=''};
  if(i==30){
    for (let i = 0; i<5;i++){
     
      let numeroUtente = parseInt(prompt('inserisci un numero'));
      console.log(numeroUtente);
      if(arr.includes(numeroUtente)==true){
        counter++;
        numeriIndovinati.push(numeroUtente)
      }
    }

    if(counter==5){
      text.innerHTML=`Complimenti hai indovinato tutti i numeri`;
      box.innerHTML=numeriIndovinati;
    }else{
      text.innerHTML=`hai indovinato ${numeriIndovinati.length} numeri`;
      box.innerHTML=numeriIndovinati;
    }
   
  }
}, 1000);


