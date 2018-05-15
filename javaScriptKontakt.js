var nameSurname = document.getElementById("nameId");
var email = document.getElementById("emailId");
var message = document.getElementById("messageId");
var wyczysc = document.getElementById("wyczyscId");
var wyslij = document.getElementById("wyslijId");
var chkBox= document.getElementById("chkBoxId");
var anyErrors;
var nameSurnameOld = 0;
var emailOld = 0;
var messageOld = 0;



function ifEnabledButton(){
    anyErrors = document.getElementsByClassName("errorClass")
    if (anyErrors.length==0 && nameSurname.value.trim().length!=0 && email.value.trim().length!=0 && message.value.trim().length!=0)
    {   wyslij.classList.remove("disabled");        
        if(!wyslij.className.includes("active")){
            wyslij.classList.add("active");
        }
    }
    else {wyslij.classList.remove("active");
            if(!wyslij.className.includes("disabled")){
                wyslij.classList.add("disabled");
            }
    }
}

function checkNameSurname(){
    if (!nameSurname.value.trim().length == 0){
        nameSurname.classList.remove("errorClass");            
    }
    else{
        if (!nameSurname.className.includes("errorClass")){
            nameSurname.className += " errorClass";
        }
    }
    ifEnabledButton();
    nameSurnameOld = nameSurname.value.trim().length;
}

function checkEmail(){
    var emailValue = email.value;

    const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
    if (!emailValue.trim().length == 0 && reg.test(emailValue)){
        email.classList.remove("errorClass");
    } else{
        if (!email.className.includes("errorClass")){
            email.className += " errorClass";
        }
    }
    ifEnabledButton();
    emailOld = email.value.trim().length;
}

function checkMessage(){
    if (!message.value.trim().length == 0){
        message.classList.remove("errorClass");
    }
    else {
        if (!message.className.includes("errorClass")){
            message.className += " errorClass";
        }        
    }
    ifEnabledButton();
    messageOld = message.value.trim().length;
}

nameSurname.onfocus=function(){      //gdy element dostanie focus   
    nameSurnameOld = nameSurname.value.trim().length;
}
nameSurname.onmouseout = function(){
    if (!nameSurname.value.trim().length==0 || nameSurname.value.trim().length==0 && !nameSurnameOld==0) //bo byc moze przez przypadek myszka przejechala nad tym polem
     {
        checkNameSurname();
    }  
        
}
nameSurname.onblur=checkNameSurname;     //gdy element traci focus

email.onfocus=function(){   
    emailOld = email.value.trim().length;
}
email.onmouseout=function(){
    if (!email.value.trim().length==0 || email.value.trim().length==0 && !emailOld==0){
        checkEmail();
    }
}
email.onblur=checkEmail;


message.onfocus=function(){       
    messageOld = message.value.trim().length;
}
message.onmouseout=function(){
    if(!message.value.trim().length==0  || message.value.trim().length==0 && !messageOld==0){
        checkMessage();
    }        
};
message.onblur=checkMessage;

wyczysc.onclick=function(){
    var errors = document.getElementsByClassName("errorClass");
    for(i=0; i<errors.trim().length; i++){
        errors[i].classList.remove("errorClass")
    }

    nameSurnameOld = 0;
    emailOld = 0;
    messageOld = 0;

}

wyslij.onclick=function(){    //tu wchodzi rowniez po wcisnieciu enter
    checkNameSurname();
    if(wyslij.className.includes("active")){
        checkEmail();
    }
    if(wyslij.className.includes("active")){
        checkMessage();
    }

    if(wyslij.className.includes("active")){
        if(chkBox.checked==true)
            alert("wysłano maila i kopie");
        else
            alert("wysłano maila");
        nameSurnameOld = 0;
        emailOld = 0;
        messageOld = 0;
    }
}
