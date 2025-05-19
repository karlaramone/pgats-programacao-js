function filtrarNumeros(lista){
    const resultado = [];

    for (let tipo = 0; tipo < lista.length; tipo++){
        const item = lista[tipo];

        if (item - 0 === item){
            resultado.push(item);
        }

    } return resultado
}

function somenteVogais(lista){
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for(let vogal = 0; vogal < lista.length; vogal++){
        const item = lista[vogal];
        
        if (item - 0 !== item){
            for(let letra = 0; letra < item.length; letra++){
                if (vogais.includes(item[letra])){
                    contador++
                }
            }         

        }
        
    }return contador;

}

const entrada = [10, 'dez', 30, 'trinta', 50, 'cinquenta'];
const apenasNumeros = filtrarNumeros(entrada);
const numeroVogais = somenteVogais(entrada);

console.log(apenasNumeros);
console.log(`Número de vogais:`, numeroVogais);

