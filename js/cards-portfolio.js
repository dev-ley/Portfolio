
  // Array de objetos representando os dados para cada card

  const dadosDosCards = [
    {
      imagemSrc: 'img/portfolio/portfolioimg.png',
      titulo: 'Mi portal U',
      categorias: ['UX Design', 'University', 'JavaScript'],
      link: 'Figma community'
    },
    {
      imagemSrc: 'img/portfolio/portfolioimg.png',
      titulo: 'Mi portal U',
      categorias: ['UX Design', 'University', 'JavaScript'],
      link: 'Figma community'
    },
    {
      imagemSrc: 'img/portfolio/portfolioimg.png',
      titulo: 'Mi portal U',
      categorias: ['UX Design', 'University', 'JavaScript'],
      link: 'Figma community'
    },
    {
      imagemSrc: 'img/portfolio/portfolioimg.png',
      titulo: 'Mi portal U',
      categorias: ['UX Design', 'University', 'JavaScript'],
      link: 'Figma community'
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
    buttonElement.textContent = dados.link;
    cardElemento.appendChild(buttonElement);

    // Adiciona o card ao contêiner do portfolio
    const linkCard = document.createElement('a')
    linkCard.href = '#';
    portfolioContainer.appendChild(linkCard)

    linkCard.appendChild(cardElemento);

    

  });

  }
