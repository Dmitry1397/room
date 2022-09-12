const array = document.querySelectorAll('.main');
const rights = document.querySelectorAll('#right');
const lefts = document.querySelectorAll('#left');

const width = window.innerWidth;

rights.forEach((element, index) => {
    let btnId = index + 1;
    if (btnId > 2) {
        btnId = 0;
    };

    element.addEventListener('click', () => {
        array.forEach((element, index) => {
            if (btnId === index) {
                if (width < 600) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'flex'
                }
            } else {
                element.style.display = 'none';
            }
        })
    })
});

lefts.forEach((element, index) => {
    let btnId = index - 1;
    if (btnId < 0) {
        btnId = 2;
    };
    
    element.addEventListener('click', () => {
        array.forEach((element, index) => {
            if (btnId === index) {
                if (width < 600) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'flex'
                }
            } else {
                element.style.display = 'none';
            }
        })
    })
});
