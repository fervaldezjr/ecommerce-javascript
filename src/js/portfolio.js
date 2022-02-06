const fotos = [
    {
      id: 1,
      url: "../images/makeup1.png",
      textAlt: "Makeup 1"
    },
    {
      id: 2,
      url: "../images/makeup2.png",
      textAlt: "Makeup 2"
    },
    {
      id: 3,
      url: "../images/makeup3.png",
      textAlt: "Makeup 3"
    },
    {
      id: 4,
      url: "../images/makeup2.png",
      textAlt: "Makeup 4"
    },
    {
      id: 3,
      url: "../images/makeup1.png",
      textAlt: "Makeup 3"
    },
    {
      id: 3,
      url: "../images/makeup3.png",
      textAlt: "Makeup 3"
    },
    {
      id: 2,
      url: "../images/makeup2.png",
      textAlt: "Makeup 2"
    },
    {
      id: 2,
      url: "../images/makeup1.png",
      textAlt: "Makeup 2"
    },
  ];
  
    // Fotos
    document.getElementById("images-section").innerHTML = fotos.map((fotos) => `<img data-aos="fade-up-right" class='m-3 shadow-xl hover:grayscale transition duration-500 cursor-pointer' width='250px' src=${fotos.url} alt=${fotos.textAlt}/>`).join('')