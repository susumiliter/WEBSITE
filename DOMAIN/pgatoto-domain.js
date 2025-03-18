// init.js
const securedomains = [
    'https://pgatotowhite.fr',
    'https://pgatoto.pro',
    'https://pgatoto.live',
    'https://pgatoto589.com',
    'https://pgatoto.site',
    'https://pgatoto-jackpot.com',
    'https://pgatoto-profit.com'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});
