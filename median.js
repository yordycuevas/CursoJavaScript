// Arithmetic median

// const list1 = [100, 200, 300, 500];

function calculateArithmeticmedian(list) {
  /*         let sumList = 0;
    
    for (let i = 0; i < list.length; i++) {
      sumList = sumList + list[i];
    }
     */
  const sumList = list.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const medianList = sumList / list.length;

  return medianList;
}
// Arithmetic median

const list1 = [100, 400000000, 700, 500, 900, 50 ];
list1.sort(function (a, b) { return a - b;

});

const mitadList1 = parseInt(list1.length / 2);

function esPar(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let mediana;
if (esPar(list1.length)) {
  const element1 = list1[mitadList1];
  const element2 = list1[mitadList1 - 1];

  const promedioElement1y2 = calculateArithmeticmedian([element1, element2]);

  mediana = promedioElement1y2;

} else {
  mediana = list1[mitadList1];
}

