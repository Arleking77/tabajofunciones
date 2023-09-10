let colorSeleccionado = '';



function cambiarColor(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('azul').addEventListener('click', cambiarColor);
document.getElementById('rojo').addEventListener('click', cambiarColor);
document.getElementById('verde').addEventListener('click', cambiarColor);
document.getElementById('amarillo').addEventListener('click', cambiarColor);



function cambiarColorKey() {
    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = colorSeleccionado;
}


window.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorSeleccionado = 'pink';
        cambiarColorKey();
    } else if (event.key === 's') {
        colorSeleccionado = 'orange';
        cambiarColorKey();
    } else if (event.key === 'd') {
        colorSeleccionado = 'lightblue';
        cambiarColorKey();
    }
});


window.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        crearDiv('purple');
    } else if (event.key === 'w') {
        crearDiv('gray');
    } else if (event.key === 'e') {
        crearDiv('brown');
    }
});


function crearDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '2px solid black';
    const container = document.querySelector('.center');
    container.appendChild(newDiv);
}

