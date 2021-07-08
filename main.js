
// abre e fecha o menu ao clicar no icone
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// esconde o menu ao clicar em algum de seus itens 
const links  = document.querySelectorAll('nav ul li a')

for (const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

// coloca sombra no header quando o scroll for maior que a altura do header

const header = document.querySelector('#header')
const navHeight =  header.offsetHeight

window.addEventListener('scroll', function() {
  if (window.scrollY >= navHeight){
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
