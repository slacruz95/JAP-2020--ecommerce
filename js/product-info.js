//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


var product = {};
var comentariosArray = [];

function showProductDesc(product, comentariosArray) {

    let info = "";
    let comments = "<hr>"

    info += `           
 
      <div class="container mt-5">
      <div class="text-center p-4">
        <h2>Descripción del producto</h2><hr>
  
       
      </div>
    
      
      <h3>${product.name}</h3>
      <hr class="my-3">
      <dl>
        <dt>Descripción</dt>
        <dd>
          <p>${product.description}</p>
        </dd>

        <dt>Costo</dt>
        <dd>
          <p>U$S ${product.cost}</p>
        </dd>

        <dt>Vendidos</dt>
        <dd>
          <p>${product.soldCount}</p>
        </dd>

        <dt>Imágenes ilustrativas</dt>
        <dd>
          <div class="row text-center text-lg-left pt-2" id="productImagesGallery">
          
         
         
 
            `;

            comentariosArray.forEach(function(comment){
                let puntos = "";

                comments += `<strong>${comment.user}</strong> dice:<br>
                <p>${comment.description}</p>
                `;
                
                for(let i= 1; i <= comment.score; i++){
                    puntos += `<span class=" fa fa-star checked"></span>`;

                }
                
                for(let i = comment.score  +1;  i<=5; i++){
                    puntos += `<span class="fa fa-star"></span>`;
                }
                comments += `<sub>${comment.dateTime}</sub><br>`;

                comments += `<div style="text-align: right;">${puntos}</div><br><hr>`

            });


    document.getElementById("listProduct").innerHTML = info;
    info += showImagesGallery(product.images);
    document.getElementById("commentProducts").innerHTML = comments;

}



function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}


let userLogged= localStorage.getItem('user-logged');
if(userLogged){
  document.getElementById("newCommentCont").style= "display: inline-block";
}

document.getElementById("sendComment").addEventListener("click", function(){
  let now = new Date();

  let dateTime=`${now.getFullYear()}-${now.getMonth()+1}- ${now.getDate()} `;
  dateTime += `${now.getHours()}:${now.getMinutes()}: ${now.getSeconds()}`;
  

  let newComment ={
    score: parseInt(estrellas ()),
    description: document.getElementById("newComm").value,
    user: JSON.parse(localStorage.getItem("user-logged")).user,
    dateTime: dateTime 

  };
comentariosArray.push(newComment);
showProductDesc(product, comentariosArray);

});

function estrellas(){
  let stars = document.getElementsByName("rating");
  for (let i = 0; i <= stars.length; i++){
    if (stars[i].checked){
      return stars[i].value
    }
  }
}



document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentariosArray = resultObj.data;

        }
    });



    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;



            showProductDesc(product, comentariosArray);
        }
    });

});