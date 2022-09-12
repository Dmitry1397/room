const menuBtn = document.querySelector('#hamburger');
const nav = document.querySelector('nav');


menuBtn.addEventListener('click', () => {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        menuBtn.removeAttribute('class', 'close');
        menuBtn.setAttribute('class', 'active');
        
    } else {
        nav.style.display = 'block';
        menuBtn.removeAttribute('class', 'active');
        menuBtn.setAttribute('class', 'close');
    }
    
})