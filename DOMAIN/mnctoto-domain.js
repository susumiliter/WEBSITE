// init.js
const securedomains = [
    'https://mnctoto389.fr',
    'https://mnctoto-top.net',
    'https://mnctoto-wd.net'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});
