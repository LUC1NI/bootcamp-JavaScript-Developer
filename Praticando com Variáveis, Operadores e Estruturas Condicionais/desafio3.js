const precoEtiqueta = 84.90;
const formaPagamento = 2;

if (formaPagamento === 1) {
  console.log('Valor final de R$ ' + (precoEtiqueta - (precoEtiqueta * 0.1)));
} else if (formaPagamento === 2) {
  console.log('Valor final de R$ ' + (precoEtiqueta - (precoEtiqueta * 0.15)));
} else if (formaPagamento === 3) {
  console.log('Duas parcelas sem juro de R$ ' + precoEtiqueta / 2);
} else {
  console.log('Parcelado em mais de duas parcelas 10% de juros vlaor fian de R$ ' + (precoEtiqueta + (precoEtiqueta * 0.1)));
}
