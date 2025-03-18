// init.js
const securedomains = [
    'https://mnctotogaskan.net',
    'https://mnctotojago.net',
    'https://mnctotojaga.net'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});
