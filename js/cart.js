var productsArray = [];


function total (){
    let total = 0;
    let subs = document.getElementsByClassName("subtotal");
    for(let i=0; i < subs.length; i++){
        total += parseInt(subs[i].innerHTML);
    }
    document.getElementById("sumaTotal").innerHTML = total;
    
} 

function subtotal (unitCost, i){
    let count = parseInt(document.getElementById(`cant${i}`).value);
    subTotal = unitCost * count;
    document.getElementById(`articleSubtotal${i}`).innerHTML = subTotal;
    
    total();
}

function currencyConvert(currency, cost){

    if(currency === "UYU"){
        return cost / 40;
    }
    else{
      return cost
    }

    

}


function articlesShow(array){
    let cont = "";
    
    for(let i=0; i < array.length; i++){

        let articles = array[i];
        let costD = currencyConvert(articles.currency, articles.unitCost)
        let sub = costD *  articles.count;

        cont += `
        <tr>
        <td><img src='${articles.src}' width="100px"></td>

        <td>${articles.name}</td>
        <td>U$S ${costD}</td>
        <td><input style="width:60px;" onchange="subtotal(${costD}, ${i})" 
        type="number" id="cant${i}" value="${articles.count}" min="1"></td>

        <td><span class="subtotal" id="articleSubtotal${i}" style="font=weight:bold;">${sub}</span></td>

        </tr>
        <br>


        `
     document.getElementById("list").innerHTML = cont;

    }
    total();
}



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObject){
        if(resultObject.status === "ok"){
            
            productsArray= resultObject.data.articles;

            articlesShow(productsArray);
           
        }

    });

});
