const themeSelector = document.querySelector('#theme-selector');
const body = document.body;
const logo = document.querySelector('footer img');

function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'images/byui-logo_white.png'; // White logo for dark theme
  } else {
    body.classList.remove('dark');
    logo.src = 'images/logo.jpg'; // Blue logo for light theme
  }
}

themeSelector.addEventListener('change', changeTheme);
