const MenuResponsivo = document.querySelector('.menu-responsivo')
const Menu = document.querySelector('.navbar-mobile')

MenuResponsivo.addEventListener('click', function toggleElemento() {

    if (Menu.style.display === 'none' || Menu.style.display === '') {
        Menu.style.display = 'flex';
    } else {
        Menu.style.display = 'none';
    } 
    }
)
