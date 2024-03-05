  // Array de objetos representando os dados para cada card

  const dadosDosCardskill = [
    {
      titulo: 'Html',
      texto: "I've learned the importance of semantic HTML for improving SEO and website accessibility. Now, I structure content in a clearer and more understandable way for search engines and users.",
      porcentagem: '98'

    },
    {
      titulo: 'Css',
      texto: "I've mastered CSS and understand its crucial role in styling web pages effectively. By applying CSS rules efficiently, I can create visually appealing and responsive designs that enhance the user experience across various devices.",
      porcentagem: '97'

    },
    {
      titulo: 'JavaScript',
      texto: "I've become proficient in JavaScript and recognize its power in creating dynamic and interactive web experiences. By leveraging JavaScript, I can develop functionalities that respond to user actions, manipulate DOM elements, and enhance the overall functionality of web applications.",
      porcentagem: '96'

    },
    {
      titulo: 'React',
      texto: "I've delved into React and appreciate its efficiency in building modern, interactive user interfaces. With React, I can create reusable UI components, manage state effectively, and optimize performance for complex web applications.",
      porcentagem: '96'

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

    // Criação do elemento div com a classe "skill"
    const skillElemento = document.createElement('div');
    skillElemento.classList.add('skill');

    // Criação do elemento div com a classe "outer"
    const outerElemento = document.createElement('div');
    outerElemento.classList.add('outer');

    // Criação do elemento div com a classe "inner"
    const innerElemento = document.createElement('div');
    innerElemento.classList.add('inner');

    // Criação do elemento div com o id "number"
    const numberElemento = document.createElement('div');
    numberElemento.id = 'number';
    

    // Adiciona o elemento div com o id "number" como filho do elemento "inner"
    innerElemento.appendChild(numberElemento);

    // Adiciona o elemento "inner" como filho do elemento "outer"
    outerElemento.appendChild(innerElemento);

    // Adiciona o elemento "outer" como filho do elemento "skill"
    skillElemento.appendChild(outerElemento);

    // Criação do elemento SVG
    const svgElemento = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElemento.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElemento.setAttribute('version', '1.1');
    svgElemento.setAttribute('width', '160px');
    svgElemento.setAttribute('height', '160px');

    // Criação das definições no SVG
    const defsElemento = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

    // Criação do gradiente linear no SVG
    const linearGradientElemento = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    linearGradientElemento.setAttribute('id', 'GradientColor');

    // Criação dos stops no gradiente linear
    const stop1Elemento = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1Elemento.setAttribute('offset', '0%');
    stop1Elemento.setAttribute('stop-color', '#FA709A');

    const stop2Elemento = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2Elemento.setAttribute('offset', '100%');
    stop2Elemento.setAttribute('stop-color', '#FEE140');

    // Adiciona os stops ao gradiente linear
    linearGradientElemento.appendChild(stop1Elemento);
    linearGradientElemento.appendChild(stop2Elemento);

    // Adiciona o gradiente linear às definições
    defsElemento.appendChild(linearGradientElemento);

    // Criação do círculo no SVG
    const circleElemento = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleElemento.classList.add('circle')
    circleElemento.setAttribute('cx', '0');
    circleElemento.setAttribute('cy', '0');
    circleElemento.setAttribute('r', '0');
    circleElemento.setAttribute('stroke-linecap', 'round');
    circleElemento.style.stroke = 'url(#GradientColor)'; // Aplica o gradiente como cor de traço

    // Adiciona as definições e o círculo ao SVG
    svgElemento.appendChild(defsElemento);
    svgElemento.appendChild(circleElemento);

    // Adiciona o SVG como filho do elemento "skill"
    skillElemento.appendChild(svgElemento);

    // Adiciona o elemento "skill" ao corpo do documento (ou ao elemento pai desejado)
    document.body.appendChild(skillElemento);

  
  
      // Adiciona as categorias
        const conteinertext = document.createElement('div');
        conteinertext.classList.add('skill-text');
        cardElemento.appendChild(skillElemento)
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

// ...

const conte = () => {
  // Seleciona todos os elementos com a classe 'circle'
  let circles = document.querySelectorAll('.circle');

  const cardskillObserver = new IntersectionObserver((elements) => {
    // Itera sobre cada elemento
    elements.forEach((element) => {
      circles.forEach(circle => {
        if (element.isIntersecting) {  //faça a Ação quando cruzar

          let numbers = document.querySelectorAll('#number');
          circle.classList.add('circle'); 

          numbers.forEach((number, index) => {
            let counter = 0;
            const counterInterval = setInterval(() => {
              const dados = dadosDosCardskill[index]; // Obtém os dados do card atual
              if (counter === parseInt(dados.porcentagem)) {
                clearInterval(counterInterval);
              } else {
                counter += 1;
                number.textContent = counter + "%";
              }
            }, 20);
          });
        } else { //Faça a Ação quando sair da Vista 

          circle.classList.remove('circle'); // Substitua 'newClass' pelo nome da nova classe desejada
        }
      });
    });
  });

  const cardvista = document.querySelector('#Skills'); // elemento a ser observado
  cardskillObserver.observe(cardvista);
}

conte();