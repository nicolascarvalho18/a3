document.getElementById("handleShowModal").addEventListener('click', handleShowModal)

function handleShowModal() {
  this.classList.toggle('opened')
  this.setAttribute('aria-expanded', this.classList.contains('opened'))
  const menuLinks = document.querySelector('.menu__links').classList

  menuLinks.contains('hidden') ? menuLinks.replace('hidden', 'show') : menuLinks.replace('show', 'hidden')

}

window.addEventListener('scroll', handleScroll);
window.addEventListener('touchmove', handleScroll);

function handleScroll() {
  var header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 0);  
}