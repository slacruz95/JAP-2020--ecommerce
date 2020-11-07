var productsArray = [];

function total() {
  let total = 0;
  let subs = document.getElementsByClassName('subtotal');
  for (let i = 0; i < subs.length; i++) {
    total += parseInt(subs[i].innerHTML);
  }
  document.getElementById('suma-total').innerHTML = total;
}

function subtotal(unitCost, i) {
  let count = parseInt(document.getElementById(`cant${i}`).value);
  subTotal = unitCost * count;
  document.getElementById(`articleSubtotal${i}`).innerHTML = subTotal;

  total();
  shippingCost();
}

function currencyConvert(currency, cost) {
  if (currency === 'UYU') {
    return cost / 40;
  } else {
    return cost;
  }
}

function articlesShow(array) {
  let cont = '';

  for (let i = 0; i < array.length; i++) {
    let articles = array[i];
    let costD = currencyConvert(articles.currency, articles.unitCost);
    let sub = costD * articles.count;

    cont += `
        <tr>
        <td><img src='${articles.src}' width="100px"></td>

        <td>${articles.name}</td>
        <td>${articles.currency} ${articles.unitCost}</td>
        <td><input style="width:60px;" onchange="subtotal(${costD}, ${i})" 
        type="number" id="cant${i}" value="${articles.count}" min="1"></td>

        <td><span class="subtotal" id="articleSubtotal${i}" style="font=weight:bold;">${sub}</span></td>

        </tr>
        <br>


        `;
    document.getElementById('list').innerHTML = cont;
  }
  total();
}
/*-------------------------MODAL------------------------------------------------------------------------------------*/
let creditCard = document.getElementById('num-card');
let cardOwner = document.getElementById('card-owner');
let cardCvc = document.getElementById('card-cvc');
let numBank = document.getElementById('num-bank');

creditCard.addEventListener('input', function (e) {
  modalValidation('num-card');
});
cardOwner.addEventListener('input', function (e) {
  modalValidation('card-owner');
});
cardCvc.addEventListener('input', function (e) {
  modalValidation('card-cvc');
});
numBank.addEventListener('input', function (e) {
  modalValidation('num-bank');
});

/*---------------------FORM---------------------------------------------------------------------------------------- */
let calle = document.getElementById('dir');
let num = document.getElementById('num');
let esq = document.getElementById('esq');
let pais = document.getElementById('pais');

calle.addEventListener('input', function (e) {
  modalValidation('dir');
});

num.addEventListener('input', function (e) {
  modalValidation('num');
});

esq.addEventListener('input', function (e) {
  modalValidation('esq');
});

pais.addEventListener('input', function (e) {
  modalValidation('pais');
});
function modalValidation(modalInput) {
  /*---------------------MODAL-------------------- */
  if (modalInput === 'num-card') {
    if (creditCard.value.trim() === '') {
      if (creditCard.classList.contains('is-valid') === true) {
        creditCard.classList.remove('is-valid');
      }
      if (creditCard.classList.contains('is-invalid') === false) {
        creditCard.classList.add('is-invalid');
      }
    } else {
      if (creditCard.classList.contains('is-invalid') === true) {
        creditCard.classList.remove('is-invalid');
      }
      creditCard.classList.add('is-valid');
    }
  }

  if (modalInput === 'card-owner') {
    if (cardOwner.value.trim() === '') {
      if (cardOwner.classList.contains('is-valid') === true) {
        cardOwner.classList.remove('is-valid');
      }
      if (cardOwner.classList.contains('is-invalid') === false) {
        cardOwner.classList.add('is-invalid');
      }
    } else {
      if (cardOwner.classList.contains('is-invalid') === true) {
        cardOwner.classList.remove('is-invalid');
      }
      cardOwner.classList.add('is-valid');
    }
  }

  if (modalInput === 'card-cvc') {
    if (cardCvc.value.trim() === '') {
      if (cardCvc.classList.contains('is-valid') === true) {
        cardCvc.classList.remove('is-valid');
      }
      if (cardCvc.classList.contains('is-invalid') === false) {
        cardCvc.classList.add('is-invalid');
      }
    } else {
      if (cardCvc.classList.contains('is-invalid') === true) {
        cardCvc.classList.remove('is-invalid');
      }
      cardCvc.classList.add('is-valid');
    }
  }
  if (modalInput === 'num-bank') {
    if (numBank.value.trim() === '') {
      if (numBank.classList.contains('is-valid') === true) {
        numBank.classList.remove('is-valid');
      }
      if (numBank.classList.contains('is-invalid') === false) {
        numBank.classList.add('is-invalid');
      }
    } else {
      if (numBank.classList.contains('is-invalid') === true) {
        numBank.classList.remove('is-invalid');
      }
      numBank.classList.add('is-valid');
    }
  }
  /*----------------------FORM---------- */
  if (modalInput === 'dir') {
    if (calle.value.trim() === '') {
      if (calle.classList.contains('is-valid') === true) {
        calle.classList.remove('is-valid');
      }
      if (calle.classList.contains('is-invalid') === false) {
        calle.classList.add('is-invalid');
      }
    } else {
      if (calle.classList.contains('is-invalid') === true) {
        calle.classList.remove('is-invalid');
      }
      calle.classList.add('is-valid');
    }
  }

  if (modalInput === 'num') {
    if (num.value.trim() === '') {
      if (num.classList.contains('is-valid') === true) {
        num.classList.remove('is-valid');
      }
      if (num.classList.contains('is-invalid') === false) {
        num.classList.add('is-invalid');
      }
    } else {
      if (num.classList.contains('is-invalid') === true) {
        num.classList.remove('is-invalid');
      }
      num.classList.add('is-valid');
    }
  }

  if (modalInput === 'num') {
    if (num.value.trim() === '') {
      if (num.classList.contains('is-valid') === true) {
        num.classList.remove('is-valid');
      }
      if (num.classList.contains('is-invalid') === false) {
        num.classList.add('is-invalid');
      }
    } else {
      if (num.classList.contains('is-invalid') === true) {
        num.classList.remove('is-invalid');
      }
      num.classList.add('is-valid');
    }
  }

  if (modalInput === 'esq') {
    if (esq.value.trim() === '') {
      if (esq.classList.contains('is-valid') === true) {
        esq.classList.remove('is-valid');
      }
      if (esq.classList.contains('is-invalid') === false) {
        esq.classList.add('is-invalid');
      }
    } else {
      if (esq.classList.contains('is-invalid') === true) {
        esq.classList.remove('is-invalid');
      }
      esq.classList.add('is-valid');
    }
  }

  if (modalInput === 'pais') {
    if (pais.value.trim() === '') {
      if (pais.classList.contains('is-valid') === true) {
        pais.classList.remove('is-valid');
      }
      if (pais.classList.contains('is-invalid') === false) {
        pais.classList.add('is-invalid');
      }
    } else {
      if (pais.classList.contains('is-invalid') === true) {
        pais.classList.remove('is-invalid');
      }
      pais.classList.add('is-valid');
    }
  }
}

document.getElementById('btn-listo').addEventListener('click', function () {
  buyValidate();
}); /*
document.getElementById("btnPayment").addEventListener("click", function () {
  buyValidate();
});*/

function buyValidate() {
  var empty = false;

  if (calle.value === '') {
    empty = 'Calle';
  }
  if (esq.value === '') {
    empty = 'Esquina';
  }
  if (pais.value === '') {
    empty = 'País';
  }
  if (num.value === '') {
    empty = 'Número';
  }

  if (document.getElementById('creditCard').checked === true) {
    if (creditCard.value === '') {
      empty = 'Número de tarjeta';
    }
    if (cardOwner.value === '') {
      empty = 'Número de tarjeta';
    }
    if (cardCvc.value === '') {
      empty = 'Número de tarjeta';
    }
  } else {
    if (numBank.value === '') {
      empty = 'Número de cuenta';
    }
  }
  if (empty === false) {
    alert('Purchase approved');
    setTimeout(function () {
      window.location = 'cover.html';
    }, 500);
  } else {
    alert('Complete fields');
  }
}

function shippingCost() {
  let sumT = parseInt(document.getElementById('suma-total').innerHTML);
  let shipping;
  let content = '';
  let element = document.getElementsByName('shipRadial');

  for (var i = 0; i < element.length; i++) {
    if (element[i].checked) {
      shipping = parseInt(element[i].value);
    }
  }
  let shippingCost = (shipping * sumT) / 100;

  let shippingWithTotal = sumT + shippingCost;

  content += `
    <tr>
    <td></td>
    <td>${shippingCost}</td>
    <td>${shippingWithTotal}</td>
    </tr>
    `;

  document.getElementById('total-with-shipping').innerHTML = content;
}

function selectPayment() {
  var payment = document.getElementsByName('payOption');

  for (var i = 0; i < payment.length; i++) {
    if (payment[i].checked && payment[i].value == '1') {
      document.getElementById('info-card').classList.remove('d-none');
      document.getElementById('info-bank').classList.add('d-none');
    } else if (payment[i].checked && payment[i].value == '2') {
      document.getElementById('info-card').classList.add('d-none');
      document.getElementById('info-bank').classList.remove('d-none');
    }
  }
}
document.addEventListener('DOMContentLoaded', function (e) {
  getJSONData('https://japdevdep.github.io/ecommerce-api/cart/654.json').then(function (resultObject) {
    if (resultObject.status === 'ok') {
      productsArray = resultObject.data.articles;

      articlesShow(productsArray);
      shippingCost();
    }
  });
});
