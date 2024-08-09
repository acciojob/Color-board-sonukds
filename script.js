//your JS code here. If required.
// script.js

const container = document.querySelector('.container');

// Create 800 boxes
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Add hover effect
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

// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
