//Teste de unidade 1
const geradorDeTagsDeIdentificacao = (nome) => nome.toUpperCase();
console.log(geradorDeTagsDeIdentificacao('Pantera'));

//Teste de unidade 2
const verificarSePodeSerAdotado = (idade, porte) => idade === 1 && porte === 'M';

//Teste de unidade 3
const calcularConsumoDeRacao = (nome, idade, peso) => peso * 300;
console.log(calcularConsumoDeRacao('Pitoco', 1, 14.5));

//Teste de unidade 4
const decidirTipoDeAtividadePorPorte = (porte) =>
  porte === 'pequeno' ? 'brincar dentro de casa' : 'atividade desconhecida';
console.log(decidirTipoDeAtividadePorPorte('pequeno'));

//Teste de unidade 5
async function buscarDadoAsync() {
  const nome = 'Pipoca';
  const nomes = ['Pipoca', 'Polenta'];

  const resultado = await Promise.resolve(nomes[0]);
  if (nome === resultado) {
    return resultado;
  }
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}