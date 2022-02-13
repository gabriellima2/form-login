const inputs = document.querySelectorAll('.inputs');
inputs.forEach( (input, index) => {
    const label = document.querySelectorAll('.labels')[index];
    
    input.addEventListener('focus', () => {
        console.log('focus')
        label.classList.add('foco');
    });

    input.addEventListener('blur', () => {
        console.log('blur')
        if( !input.value ) {
            label.classList.remove('foco');
        };
    });
});

const form = document.querySelector('#form');
form.addEventListener('submit', event => {
    event.preventDefault();
    validate();
});


function validate() {
    const campo_erro = document.querySelectorAll('.msg-erro');

    const valorNome = nome.value.trim();
    const valorEmail = email.value.trim();

    const validarEmail = email => {
        const regex = /^[a-z0-9(._)?]*@[a-z]*\.[a-z]+(.*[a-z]+)?$/i;
        return regex.test(email);
    };

    const tratarErro = ( elemento) => {
        elemento.classList.toggle('erro');
        campo_erro.innerHTML = 'Campo inválido!'
        elemento.addEventListener('focus', () => {
            elemento.classList.remove('erro');
            campo_erro.innerHTML = '';
        });
    };

    if ( valorNome === '' || valorNome.length <= 2) {
        tratarErro(nome);
        return;
    };

    if ( valorEmail === '' || !validarEmail(valorEmail) ) {
        tratarErro(email)
        return;
    };
};
