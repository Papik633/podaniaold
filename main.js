
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;


toggleDarkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    

    if (body.classList.contains('dark-mode')) {
        darkModeIcon.src = 'obrazy/sun.png';
        darkModeIcon.alt = 'Light Mode Icon';
    } else {
        darkModeIcon.src = 'obrazy/moon.png';
        darkModeIcon.alt = 'Dark Mode Icon';
    }
});
