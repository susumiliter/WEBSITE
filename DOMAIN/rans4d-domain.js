// init.js
const securedomains = [
    'https://rans4djago.net',
    'https://rans4djuara.org',
    'https://rans4dkeren.fr',
    'https://rans4d-sumber.com',
    'https://rans4dbebas.uk'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});