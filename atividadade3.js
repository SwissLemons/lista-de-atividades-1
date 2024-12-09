function atividade3(numero) {
    const digitos = numero.toString().split('');
    let soma = 0;

    for (let digito of digitos) {
        soma += parseInt(digito, 10);
    }

    return soma;
}

module.exports = atividade3