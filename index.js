import { MenuResponsivo } from "./js/responsivo.js"
import { criarCard } from "./js/cards-portfolio.js"
import { anime } from "./js/cards-skill.js"


//  Menu Responsivo 
MenuResponsivo()

// Alert De Download
const btdownloadcurriculo = document.querySelector('#curriculo')

btdownloadcurriculo.addEventListener('click', function() {
    alert('Seu Download inicionou!');
})

// Dark & Light Mode 

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')

})

criarCard()
anime()

