document.addEventListener('DOMContentLoaded', ()=> {
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click', (e)=> {
        e.preventDefault();

        const footer = document.querySelector('#footer');  

        if(footer.classList.contains('activo')){
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y moneda';

        }else{
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }

    });
});