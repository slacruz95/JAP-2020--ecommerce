//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/*document.addEventListener("DOMContentLoaded", function(e){

    

});*/

    function validateEmail(mail) 
{
 if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

  


function redirect() {
    let contEmail = document.getElementById("inputEmail").value
    let contPasswd = document.getElementById("inputPasswd").value

    if (contEmail.trim() === "" || contPasswd.trim() === "") {
        alert("Invalid data")

    } else {
     const isMail =  validateEmail(contEmail);
     
     if(isMail){
         
        location.href = "cover.html";
    
    }
}

}



