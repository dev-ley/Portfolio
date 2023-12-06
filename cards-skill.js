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
