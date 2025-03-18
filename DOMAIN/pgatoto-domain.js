// init.js
const securedomains = [
    'https://pgatotojago.net',
    'https://pgatoto288.fr',
    'https://pgatoto289.fr',
    'https://pgatotojaga.net',
    'https://pgatotogaskan.net'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});
