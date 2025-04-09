export function header() {
    const menu = [
        { text: 'Home', href: '/' },
        { text: 'Text', href: '/text' },
        { text: 'Food', href: '/food' },
        { text: 'Darzas', href: '/darzas' },
        { text: 'Header', href: '/header' },
    ];

    console.log(location.pathname);

    const currentPage = location.pathname;
    let linksHTML = '';
    for (const link of menu) {
        let activePage = '';
        if(link.href === currentPage) {
            activePage = 'active';
        }
        linksHTML += `<a class="link" href="${link.href}">${link.text}</a>`;
    }

    const HTML = `
        <header class="main-header">
            <img class="logo" src="../food/pizza.png" alt="Logo">
            <nav class="main-nav">${linksHTML}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);
}