import { criarCard } from "./cards-portfolio.js"
import { anime } from "./cards-skill.js"
import { incrementarContador } from "./contagem-dinamica.js"
import { incrementarContador2 } from "./contagem-dinamica.js"
import { incrementarContador3 } from "./contagem-dinamica.js"


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


incrementarContador()
incrementarContador2()
incrementarContador3()
criarCard()
anime()



export function MenuResponsivo() {
    const MenuResponsivo = document.querySelector('.menu-responsivo')
    const links = document.querySelector('.conteiner-menu')
    const Menu = document.querySelector('.navbar-mobile')
    
    MenuResponsivo.addEventListener('click', function toggleElemento() {
    
        if (Menu.style.display === 'none' || Menu.style.display === '') {
            Menu.style.display = 'flex';
        } else {
            Menu.style.display = 'none';
        } 
    })

    links.addEventListener('click', () => {

        Menu.style.display = 'none';

    })
    
}

