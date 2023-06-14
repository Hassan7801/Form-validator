let form = document.getElementById('form');
let username = document.getElementById('username');
let email  = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');




function showError( input , message){
    let formControl = input.parentElement;
    formControl.className ='form-control error ' ; 
    let small = formControl.querySelector('small')
    small.innerText = message ; 
}

function showSuccess(input ){

    let formControl = input.parentElement;
    formControl.className= ' form-control success';
    
}

function checkEmail(input){
    
       
         const regex=   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
         if (regex.test(input.value.trim()) ) {
             showSuccess(input);
         } else {
             showError(input , 'Email in not valid');
         }
        
        }


 function checkpassword(input1 , input2){
    if( input1.value !== input2.value){
        showError(input2 , 'Password do not match' )
    }

}       
 
function checkValidtion(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() ==''){
            showError(input , `${getFieldName(input)} is Required`);
        }
        else {
            showSuccess(input);
        }
    });

}

function getFieldName(input){

return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input , min , max){
    if (input.value.length < min) {
        showError(input , `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max){
    showError(input , `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }
}



form.addEventListener('submit' , function(e) {

    e.preventDefault();

    
    checkValidtion([username, email, password,password2]);
    checkLength(username , 3 , 15);
    checkLength(password , 6 , 25 );
    checkEmail(email);
    checkpassword(password, password2);

});
