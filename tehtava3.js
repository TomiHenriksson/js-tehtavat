const side1 =prompt('enter the length of side 1: ');
const side2 =prompt('enter the length of side 2: ');
const side3 =prompt('enter the length of side 3: ');

sumOfSides = side1 + side2 + side3;

if ((side1 == side2 && side2 == side3) ) {
  document.getElementById('tri').innerText = 'triangle: equilateral triangle';
} else if (side1 == side2 || side1 == side3 || side2 == side3) {
  document.getElementById('tri').innerText = 'triangle: isosceles triangle';
} else {
  document.getElementById('tri').innerText = 'triangle: scalene triangle';
}

