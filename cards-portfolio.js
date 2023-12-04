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

  /*
  <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>
            <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>
            <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>
            <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>
            <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>
            <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>
            <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>
            <div class="card">
                <img src="img/portfolio/portfolioimg.png" alt="imagem de capa">
                <h4>Mi portal U</h4>
                <span>UX Design</span><span>University</span><span>JavaScript</span>
                <button>Figma community</button>
            </div>*/

  // Obtém o contêiner do portfolio
  const portfolioContainer = document.getElementById('portfolio-container');

  // Loop para criar os cards dinamicamente
  dadosDosCards.forEach((dados) => {
    // Cria um novo elemento div para o card
    const cardElemento = document.createElement('div');
    cardElemento.classList.add('card');

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
    portfolioContainer.appendChild(cardElemento);
  });
