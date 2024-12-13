function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.topnav .redirect_into_page');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          const offsetTop = targetSection.offsetTop;

          window.scroll({
              top: offsetTop,
              behavior: 'smooth'
          });
      });
  });
});