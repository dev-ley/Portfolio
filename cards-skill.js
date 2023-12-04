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

  
// Criação do elemento skill-graph
const skillGraphContainer = document.createElement('div');
skillGraphContainer.classList.add('skill-graph');

const skillGraphPercentage = document.createElement('h4');
skillGraphPercentage.textContent = '97%';

skillGraphContainer.appendChild(skillGraphPercentage);

// Criação do elemento skill-text
const skillTextContainer = document.createElement('div');
skillTextContainer.classList.add('skill-text');

const skillTextTitle = document.createElement('h4');
skillTextTitle.textContent = 'UX Design';

const skillTextDescription = document.createElement('p');
skillTextDescription.textContent = 'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.';

skillTextContainer.appendChild(skillTextTitle);
skillTextContainer.appendChild(skillTextDescription);

// Adiciona os elementos ao body ou ao elemento pai desejado
document.body.appendChild(skillGraphContainer);
document.body.appendChild(skillTextContainer);