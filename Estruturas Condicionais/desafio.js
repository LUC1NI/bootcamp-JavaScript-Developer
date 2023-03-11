const precoGasolina = 5.89;
const precoEtanol = 4.39;
const tipoCombustivel = 'Gasolina';
const KmPorLitro = 13;
const distanciaEmkm = 197;

const LitrosConsumidos = distanciaEmkm / KmPorLitro;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = LitrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = LitrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2));
}






