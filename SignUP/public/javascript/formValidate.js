/*const init = () =>{

//...

const validateAll = (event) =>{
  //let alvo = event.currentTarget;
  
  let regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regex_all = /([1-9]|[a-z])/g
  let teste = regex_email.test(inputEmail.value);
  console.log(inputEmail.value);
  let teste1 = regex_all.test(inputFname.value);
  
  let teste2 = regex_all.test(inputLname.value);
  
  let teste3 = regex_all.test(inputSenha.value);
  if(!teste || !teste1 || !teste2 || !teste3){
    submitButton.setAttribute('disabled','disabled');
  }else{
    submitButton.removeAttribute('disabled');
  }
}


var inputEmail = document.querySelector('input[type="email"]')
var inputFname = document.getElementById('fname');
var inputLname = document.getElementById('lname');
var inputSenha = document.getElementById('secret');
var submitButton = document.querySelector('button');
//...


inputFname.addEventListener('input',validateAll)

inputLname.addEventListener('input',validateAll)

inputSenha.addEventListener('input',validateAll);

inputEmail.addEventListener('input',validateAll);
*//*
if(submitButton){
  submitButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log('AGR FOI');
  })
}

}

window.onload = init;*/