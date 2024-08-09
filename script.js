
const container = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => changeColor(square));
    square.addEventListener('mouseout', () => resetColor(square));

    container.appendChild(square);
}

function changeColor(element) {
    element.style.backgroundColor = getRandomColor();
}

function resetColor(element) {
    setTimeout(() => {
        element.style.backgroundColor = '#ddd';
    }, 1000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
