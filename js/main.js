let ul = document.querySelector('nav .ul');

function openMenu() {
  ul.classList.add('open');
}

function closeMenu() {
  ul.classList.remove('open');
}

// Função para fechar o menu ao clicar em uma opção
function closeMenuOnClick() {
  closeMenu();
}

// Adicione um evento de clique a todos os links do menu
let menuLinks = document.querySelectorAll('nav ul a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', closeMenuOnClick);
});


/*empresa*/
