function filtrarNumeros(lista){
    const resultado = [];

    for (let tipo = 0; tipo < lista.length; tipo++){
        const item = lista[tipo];

        if (item - 0 === item){
            resultado.push(item);
        }

    } return resultado
}

const entrada = [10, 'dez', 30, 'trinta', 50, 'cinquenta'];
const apenasNumeros = filtrarNumeros(entrada);

console.log(apenasNumeros);


