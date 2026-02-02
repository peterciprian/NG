const handleMenuButtonClick = (event) => {
    const menu = document.getElementById('menu');
    menu.style.maxHeight = menu.style.maxHeight === '240px' ? '0' : '240px';
    const menuButton = document.getElementById('menu-button');
    menuButton.style.position = menu.style.maxHeight === '240px' ? 'absolute' : 'static';
}   