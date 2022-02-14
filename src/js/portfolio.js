const images = [
    {
        id: 1,
        url: '../../images/makeup1.png',
        alt: 'Maquillaje de noche'
    },
    {
        id: 2,
        url: '../images/makeup2.png',
        alt: 'Maquillaje de noche'
    },
    {
        id: 3,
        url: '../images/makeup3.png',
        alt: 'Maquillaje de noche'
    },
    {
        id: 4,
        url: '../images/makeup3.png',
        alt: 'Maquillaje de noche'
    }
];

let portfolio = document.getElementById('portfolio');

portfolio.innerHTML = images.map( (images) => `
        <img src="${images.url}" alt="${images.alt}"/>
`).join('');