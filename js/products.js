//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const ORDER_ASC_BY_COST = 'pag->PAG';
const ORDER_DESC_BY_COST = 'PAG->pag';
const ORDER_DESC_BY_REL = 'REL->rel';

var productsArray = [];
var minCost = undefined;
var maxCost = undefined;
var buscar = undefined;

function sortProducts(criterio, array) {
  let result = [];
  if (criterio === ORDER_ASC_BY_COST) {
    result = array.sort(function (a, b) {
      if (a.cost < b.cost) {
        return -1;
      }
      if (a.cost > b.cost) {
        return 1;
      }
      return 0;
    });
  } else if (criterio === ORDER_DESC_BY_COST) {
    result = array.sort(function (a, b) {
      if (a.cost > b.cost) {
        return -1;
      }

      if (a.cost < b.cost) {
        return 1;
      }

      return 0;
    });
  } else if (criterio === ORDER_DESC_BY_REL) {
    result = array.sort(function (a, b) {
      if (a.soldCount > b.soldCount) {
        return -1;
      }
      if (a.soldCount < b.soldCount) {
        return 1;
      }
      return 0;
    });
  }
  return result;
}

function showProducts(array) {
  let contenido = '';

  for (let i = 0; i < array.length; i++) {
    let product = array[i];

    if (
      (minCost == undefined || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
      (maxCost == undefined || (maxCost != undefined && parseInt(product.cost) <= maxCost))
    ) {
      if (buscar == undefined || product.name.toLowerCase().indexOf(buscar) != -1) {
        contenido +=
          `
          <div class="col-md-6 col-lg-4 p-2">
        <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` +
          product.imgSrc +
          `" alt="` +
          product.name +
          `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` +
          product.name +
          ' U$S ' +
          product.cost +
          `</h4>
                        
                    </div>
                    <p class="mb-1">` +
          product.description +
          `</p>
          <small class="text-muted">` +
          'Cant. Vendidos ' +
          product.soldCount +
          `</small>
                </div>
            </div>
        </a>
        </div>
        `;
      }
    }

    document.getElementById('listadoProduct').innerHTML = contenido;
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  getJSONData(PRODUCTS_URL).then(function (resultObjeto) {
    if (resultObjeto.status === 'ok') {
      productsArray = resultObjeto.data;

      showProducts(productsArray);
    }
  });
});

document.getElementById('desc').addEventListener('click', function (e) {
  productsArray = sortProducts(ORDER_DESC_BY_COST, productsArray);
  document.getElementById('asc').classList.remove('active');
  document.getElementById('rel').classList.remove('active');

  showProducts(productsArray);
});
document.getElementById('asc').addEventListener('click', function (e) {
  productsArray = sortProducts(ORDER_ASC_BY_COST, productsArray);
  document.getElementById('desc').classList.remove('active');
  document.getElementById('rel').classList.remove('active');

  showProducts(productsArray);
});
document.getElementById('rel').addEventListener('click', function (e) {
  productsArray = sortProducts(ORDER_DESC_BY_REL, productsArray);
  document.getElementById('asc').classList.remove('active');
  document.getElementById('desc').classList.remove('active');

  showProducts(productsArray);
});

document.getElementById('filter').addEventListener('click', function (e) {
  minCost = document.getElementById('minRange').value;
  maxCost = document.getElementById('maxRange').value;

  if (minCost != undefined && minCost != '' && parseInt(minCost) >= 0) {
    minCost = parseInt(minCost);
  } else {
    minCost = undefined;
  }

  if (maxCost != undefined && maxCost != '' && parseInt(maxCost) >= 0) {
    maxCost = parseInt(maxCost);
  } else {
    maxCost = undefined;
  }

  showProducts(productsArray);
});

document.getElementById('clean').addEventListener('click', function () {
  document.getElementById('minRange').value = '';
  document.getElementById('maxRange').value = '';

  minCost = undefined;
  maxCost = undefined;
  showProducts(productsArray);
});

document.getElementById('buscador').addEventListener('input', function () {
  buscar = document.getElementById('buscador').value.toLowerCase();
  showProducts(productsArray);
});
