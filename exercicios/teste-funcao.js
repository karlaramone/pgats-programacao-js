import { listaDeCaes, listaDeGatos } from "./teste-dados.js";

function entregarPetiscos(listaDeDogs) {
    listaDeDogs.forEach(cao => {
        console.log(`Entregue um petisco para: ${cao}`);
    });
}

entregarPetiscos(listaDeCaes)
entregarPetiscos(listaDeGatos)