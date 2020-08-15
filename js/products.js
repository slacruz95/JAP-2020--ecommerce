//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var productsArray = [];

function showProducts(array){

    let contenido= "";

    for(let i=0; i<array.length; i++){

        let product = array[i];
        

        contenido += `
        <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.name + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name +" U$S "+ product.cost + `</h4>
                        <small class="text-muted">` + ""+product.soldCount + `</small>
                    </div>
                    <p class="mb-1">` + product.description + `</p>
                </div>
            </div>
        </a>
        `
        
        

        document.getElementById("listadoProduct").innerHTML = contenido;
    }
}








document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObjeto){
       if (resultObjeto.status === "ok"){
        productsArray = resultObjeto.data;

        showProducts(productsArray);
       }

    });

});