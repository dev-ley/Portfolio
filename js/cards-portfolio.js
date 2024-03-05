
  // Array de objetos representando os dados para cada card

  const dadosDosCards = [
    {
      imagemSrc: 'img/portfolio/Portifolio Wesley.jpg',
      titulo: 'Portifolio',
      categorias: ['Html', 'Css', 'JavaScript'],
      link: 'Acesse aqui',
      href: 'https://tion-iota.vercel.app/'
    },
    {
      imagemSrc: 'img/portfolio/figmaland.png',
      titulo: 'Site Figma-Land ',
      categorias: ['Html', 'Css', 'JavaScript'],
      link: 'Acesse aqui',
      href: 'https://lp-dark.vercel.app/'
      
    },
    {
      imagemSrc: 'img/portfolio/whitepace.jpeg',
      titulo: 'Site Whitepace',
      categorias: ['Html', 'Css', 'JavaScript'],
      link: 'Acesse aqui',
      href: 'https://landingpage-whitepace.vercel.app/'
    },
    {
      imagemSrc: 'img/portfolio/portfolioimg.png',
      titulo: 'Mi portal U',
      categorias: ['Html', 'Css', 'JavaScript'],
      link: 'Acesse aqui',
      href: '#'
    },
    // Adicione mais objetos para representar mais projetos
  ];

  

  export function criarCard () {

  // Obtém o contêiner do portfolio

  const portfolioContainer = document.getElementById('portfolio-container');

  // Loop para criar os cards dinamicamente
  dadosDosCards.forEach((dados) => {
    // Cria um novo elemento div para o card

    const cardElemento = document.createElement('div');
    cardElemento.classList.add('card');
    cardElemento.classList.add('hidden');

    // Adiciona a imagem
    const imagemElemento = document.createElement('img');
    imagemElemento.src = dados.imagemSrc;
    imagemElemento.alt = 'imagem de capa';
    cardElemento.appendChild(imagemElemento);

    // Adiciona o título
    const tituloElemento = document.createElement('h4');
    tituloElemento.textContent = dados.titulo;
    cardElemento.appendChild(tituloElemento);

    // Adiciona as categorias
    dados.categorias.forEach((categoria) => {
      const categoriaElemento = document.createElement('span');
      categoriaElemento.textContent = categoria;
      cardElemento.appendChild(categoriaElemento);
    });

    // Adiciona o botão
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('butonlink')
    buttonElement.textContent = dados.link;
    cardElemento.appendChild(buttonElement);

    // Adiciona o card ao contêiner do portfolio  
    const linkCard = document.createElement('a')
    linkCard.href = dados.href;
    portfolioContainer.appendChild(linkCard)

    linkCard.appendChild(cardElemento);

    

  });

  }
