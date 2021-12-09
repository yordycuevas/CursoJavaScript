const list1 = [1, 2, 3, 4, 5, 67, 3, 3, 2, 2, 2, 2, 2, 21, 1];

const list1Count = {};

list1.map(function (element) {
  if (list1Count[element]) {
    list1Count[element] += 1;
  } else {
    list1Count[element] = 1;
  }
});

const list1Array = Object.entries(list1Count).sort(function (a, b) {
  return a[1] - b[1];
});

const mode = list1Array[list1Array.length - 1];