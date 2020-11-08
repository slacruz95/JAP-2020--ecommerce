//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let btnProfile = document.getElementById('btn-profile');

/*
let validatedImg = true;
function imgSave() {
  if (imgInput.value.trim() === '') {
    validatedImg = false;
  }
  if (validatedImg) {
    localStorage.setItem('img-profile', JSON.stringify({ img: imgInput.value }));
  }
}
*/

btnProfile.addEventListener('click', function (e) {
  var name = document.getElementById('name-profile');
  var apellido = document.getElementById('ap-profile');
  var age = document.getElementById('age-profile');
  var tel = document.getElementById('tel-profile');
  var mail = document.getElementById('mail-profile');
  var imgInput = document.getElementById('url-profile');
  let validated = true;

  if (name.value.trim() === '') {
    name.classList.add('is-invalid');
    validated = false;
  } else {
    name.classList.remove('is-invalid');
    name.classList.add('is-valid');
  }
  if (apellido.value.trim() === '') {
    apellido.classList.add('is-invalid');
    validated = false;
  } else {
    apellido.classList.remove('is-invalid');
    apellido.classList.add('is-valid');
  }

  if (mail.value.trim() === '') {
    mail.classList.add('is-invalid');
    validated = false;
  } else {
    mail.classList.remove('is-invalid');
    mail.classList.add('is-valid');
  }

  if (validated) {
    localStorage.setItem(
      'profile-user',
      JSON.stringify({
        name: name.value,
        apellido: apellido.value,
        age: age.value,
        tel: tel.value,
        mail: mail.value,
        img: imgInput.value,
      })
    );
    setTimeout(function () {
      window.location = 'my-profile.html';
    }, 500);
  }
});

let userLog = localStorage.getItem('user-logged');
if (userLog) {
  let profile = localStorage.getItem('profile-user');

  if (profile) {
    profile = JSON.parse(profile);

    if (profile.img != '') {
      document.getElementById('img-profile').src = profile.img;
    }
    document.getElementById('url-profile').value = profile.img;
    document.getElementById('name-profile').value = profile.name;
    document.getElementById('ap-profile').value = profile.apellido;
    document.getElementById('age-profile').value = profile.age;
    document.getElementById('tel-profile').value = profile.tel;
    document.getElementById('mail-profile').value = profile.mail;
  }
}
