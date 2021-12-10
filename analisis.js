// Helpers

function esPar(numerito) {
  return numerito % 2 === 0;
}


const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const salariosColsorted = salariosCol.sort(function (a, b) {
  return a - b;
});


function calculateArithmeticmedian(lista) {
  const sumLista = lista.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const promedioLista = sumLista / lista.length;

  return promedioLista;
}
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];

      const mediana = calculateArithmeticmedian([
        personitaMitad1,
        personitaMitad2,
      ]);

      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }


console.log(medianaSalarios(salariosColsorted));
