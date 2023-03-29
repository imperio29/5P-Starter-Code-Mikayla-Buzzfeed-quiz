//result divs
let enzoDiv=document.querySelector(".enzo");
let carolineDiv=document.querySelector(".caroline");
let damonDiv=document.querySelector(".damon");
let bonnieDiv=document.querySelector(".bonnie");

let result= document.querySelector(".results");

let submitButton = document.querySelector(".submit1");

   

let submit1Button = document.querySelector(".submit");
submitButton.onclick = function(){
   

let books = document.querySelector(".books").value;
    let subject = document.querySelector(".subject").value;

   //type if statement here!
    if (books <=5 && subject==="math" ){
    result.innerHTML="You read " + books + " books this year and your favorite subject is " + subject+ ". You are  Enzo St. John!"; 
      
    } else if (books <=5 && subject==="english"){
        result.innerHTML="You read " + books + " books this year and your favorite subject is " + subject+ ". You are  Caroline Forbes!"; 
      
    }else if (books >=5 && subject==="english") {
    result.innerHTML="You read " + books + " books this year and your favorite subject is " + subject+ ". You are  Damon Salvatore!";
        
    }else if (books >=5 && subject==="math") {
    result.innerHTML="You read " + books + " books this year and your favorite subject is " + subject+ ". You are  Bonnie Bennett!";
    }
    };