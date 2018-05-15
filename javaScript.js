var modal = document.getElementById("modalPhotos");
var span = document.getElementsByClassName("close")[0];
var photos = document.getElementsByClassName("thumbnail");
var email = document.getElementById("emailId");

var i;
for (i = 0; i < photos.length; i++) {
    photos[i].onclick=function(){
        modal.style.display="block";   //otwarcie modala
    }
}

span.onclick=function(){
    modal.style.display="none";  //zamkniecie modala
}

window.onclick=function(event){
    if(event.target==modal){
        modal.style.display = "none";  //zamkniecie modala gdy klik poza modal
    }
}