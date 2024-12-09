function atividade1(string) {
    const contagem = {};

    for (let char of string) {
        if (contagem[char]) {
            contagem[char]++;
        } else {
            contagem[char] = 1;
        }
    }

    return contagem;
}

module.exports = atividade1