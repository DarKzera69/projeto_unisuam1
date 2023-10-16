//Testimonial Data
const testimonials = [
    {
      name: "Leonardo Cohen – SLS World Championship",
      job: "Finals 2018 - Rio de Janeiro",
      image: "./img/demoimentos/depoim1.png",
      testimonial:
        "“Fantástico trabalho da equipe Telecall. Profissionais completamente comprometidos. Uma entrega perfeita.”",
    },
    {
      name: "Laila Dias",
      job: "Account Executive - Brasil",
      image: "./img/demoimentos/logo-rock-in-rio.png",
      testimonial:
        "“É com o coração transbordando de orgulho e gratidão que concluímos uma edição do Rock in Rio. Toda"+
        "amagia que vivemos nesses 7 dias de festival jamais seria possível sem a participação de marcas e"+
        "profissionais como vocês que acreditaram na gente e ajudaram a tornar esse sonho realidade. A edição"+
        "2017 ficará para a história e agora nosso desafio é ainda maior. Fica aqui mais uma vez, o nosso"+
        "muito obrigada e que venha 2019!!”",
    },
    {
      name: "Pedro Pereira",
      job: "Diretoria de Projetos",
      image: "./img/demoimentos/logo-maratona.png",
      testimonial:
        "“A operação foi um sucesso, a transmissão correu como desejado, graças à você. Agradecemos a"+
        "atenção, o cuidado e o esforço de toda a equipe com o nosso produto... Muito obrigado e parabéns"+
        "pelo excelente trabalho. Para nós, foi um novo padrão de entrega e operação excepcional”",
    },
    {
      name: "Kathy Whalen",
      job: "Project Manager, Consumer Events | Creative & Event Solutions | Global Business Services",
      image: "./img/demoimentos/logo-mcdonalds.png",
      testimonial:
        "“O Mc Donald conheceu a Telecall durante os Jogos Olímpicos Rio 2016 para um pedido urgente de um"+
        "evento de mídia ao vivo, quatro dias mais tarde. A Telecall foi extremamente proﬁssional... Nós"+
        "simplesmente não teríamos conseguido sem a parceria da equipe Telecall. Só usaremos eles em eventos"+
        "no Rio.”",
    },
    {
      name: "Blanka Konečná",
      job: "Project manager",
      image: "./img/demoimentos/logo-czech.png",
      testimonial:
        "“Equipe e visitantes da casa da República Tcheca ﬁcaram felizes, foi um sucesso os serviços"+
        "prestados pela Telecall, agradecemos toda a ajuda.”",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;