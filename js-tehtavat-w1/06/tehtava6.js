positiveInt = +prompt('enter a positive number: ');

let table = 'Multiplication Table:' + '<br>';
for (i=1; i<=positiveInt; i++)  {
  for (let j=1; j<=positiveInt; j++)  {
    table += (i * j) + '\t';
  }
  table += '<br>';
}

document.getElementById('table').innerHTML = table;

