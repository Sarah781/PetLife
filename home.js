var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function(duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
})

// function duvida() {
//     elementosDuvida.forEach = document.querySelectorAll('.duvida');
//     duvida.classList.toggle('ativa');
// }

