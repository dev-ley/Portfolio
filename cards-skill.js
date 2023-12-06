  // Array de objetos representando os dados para cada card

  const dadosDosCardskill = [
    {
      titulo: 'UX Design',
      texto: 'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
      porcentagem: '97%'

    },
    {
      titulo: 'UI Design',
      texto: 'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
      porcentagem: '96%'

    },
    {
      titulo: 'Information Architecture',
      texto: 'Information architecture is the design of the structure and organization of content on a website or digital product to make it easy for users to navigate and understand.',
      porcentagem: '90%'

    },
    // Adicione mais objetos para representar mais projetos
  ];




  export function criarCardSkill () {

    // Obtém o contêiner do portfolio
    const skillContainer = document.getElementById('conteiner-skill');
  
    // Loop para criar os cards dinamicamente
   dadosDosCardskill.forEach((dados) => {
      // Cria um novo elemento div para o card
      const cardElemento = document.createElement('div');
      cardElemento.classList.add('card-skill');
      cardElemento.classList.add('hidden');
      skillContainer.appendChild(cardElemento)
  
      // Adiciona a graph
      const graph = document.createElement('div');
      graph.classList.add('skill-graph');
      cardElemento.appendChild(graph);
  
      // Adiciona o porcentagem
      const tituloElemento = document.createElement('h4');
      tituloElemento.textContent = dados.porcentagem;
      graph.appendChild(tituloElemento);
  
      // Adiciona as categorias
        const conteinertext = document.createElement('div');
        conteinertext.classList.add('skill-text');
        cardElemento.appendChild(conteinertext);
  
      // Adiciona o botão
      const textitulo = document.createElement('h4');
      textitulo.textContent = dados.titulo;
      conteinertext.appendChild(textitulo);

      // Adiciona o botão
      const texpagraph = document.createElement('p');
      texpagraph.textContent = dados.texto;
      conteinertext.appendChild(texpagraph);
  
      // Adiciona o card ao contêiner do portfolio
      skillContainer.appendChild(cardElemento);
    });
  }


  //Função pro Observador
export  const anime = () => {

  const cardObserver = new IntersectionObserver((elements) => { //localizando o elemento
    elements.forEach ( (element) => {
      if (element.isIntersecting) { //se o elemento atravessar faça 
        element.target.classList.add('show')
  
      } else {
        element.target.classList.remove('show')
  
      }
    })
  })

  const cards = document.querySelectorAll('.hidden') //elemento a ser observado
  cards.forEach((card) => cardObserver.observe(card))
  
}

criarCardSkill()