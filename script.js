const sloganBtn = document.getElementById('sloganBtn');

sloganBtn.addEventListener('click', () => {
    if (window.location.hash === '#about') {
        window.location.hash = '';
        setTimeout(() => {
            window.location.hash = '#about';
        }, 10);
    } else {
        window.location.hash = '#about';
    }
});