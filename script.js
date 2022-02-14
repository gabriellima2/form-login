const inputs = document.querySelectorAll('.inputs');
inputs.forEach( (input, index) => {
    const label = document.querySelectorAll('.labels')[index];
    
    input.addEventListener('focus', () => {
        label.classList.add('foco');
    });

    input.addEventListener('blur', () => {
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
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');


    const valorSenha = senha.value.trim();
    const valorEmail = email.value.trim();

    const validarEmail = email => {
        const regex = /^[a-z0-9(._)?]*@[a-z]*\.[a-z]+(.*[a-z]+)?$/i;
        return regex.test(email);
    };

    const tratarErro = elemento => {
        elemento.classList.toggle('erro');

        const campos_erro = document.querySelectorAll('.msg-erro');

        let area_msgErro = '';
        let erro = ''

        campos_erro.forEach( campo => {
            if ( campo.id.includes(elemento.id) ) {
                area_msgErro = campo;
                erro = `Campo ${elemento.id.toUpperCase()} inválido!`;
            };
        });

        area_msgErro.innerHTML = erro;
        elemento.addEventListener('focus', () => {
            elemento.classList.remove('erro');
            area_msgErro.innerHTML = '';
        });
    };

    if ( valorEmail === '' || !validarEmail(valorEmail) ) {
        tratarErro(email)
        return;
    };

    if ( valorSenha === '' || valorSenha.length < 8) {
        tratarErro(senha);
        return;
    };
};
