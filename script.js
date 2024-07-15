const numeros = [50, 45, 67, 89, 10, 5];

numeros.forEach(numero => {
  const dobro = numero * 2;
  console.log(dobro);
});

const numeros2 = [50, 45, 67, 89, 10, 5];

const novoVetor = numeros2.map(numero =>{
  return numero*2

  })

console.log(novoVetor)
